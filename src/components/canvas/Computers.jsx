import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" skyColor={0x080820} />
      <pointLight intensity={0.9} />

      <spotLight
        position={[-40, 50, -20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.65}
        position={isMobile ? [-0.5, -3, -0.75] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // add a listener for changes to the screen-size
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    //set initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches)

    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      console.log('media is being handled...', e)
      setIsMobile(e.matches)
    }

    // add the callback function to handle changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas