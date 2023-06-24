import { motion } from 'framer-motion'

import { styles } from '../style'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <div className='relative w-full mx-auto h-[100dvh]'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]"></div>
          <div className="h-40 sm:h-80 w-1 bg-gradient-to-b from-[#915eff] to-transparent"></div>
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Utsav</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas className='mt-20 h-[80vh] border-2 border-red-700' />
      <a href='#about' className='absolute bottom-10 mx-[50%] flex justify-center items-start h-16 w-8 rounded-3xl border-4 border-zinc-300'>
        <motion.div
          animate={{ y: [0, 18, 36, 18, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >

          <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
        </motion.div>
      </a>
    </div>
  )
}

export default Hero