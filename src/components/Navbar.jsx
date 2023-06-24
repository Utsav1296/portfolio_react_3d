import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, logoColor, menu, close } from '../assets'



const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 py-5 bg-primary`} >
      <div className="w-full items-center flex justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logoColor} alt="logo" className='w-10 h-10 object-contain' />
          <p className='font-bold text-3xl'>Utsav</p>
        </Link>

        {/* on small screen  */}
        <div className="menu-item relative block md:hidden">
          <img src={!toggle ? menu : close} className='p-2 w-12 h-12' onClick={() => setToggle(!toggle)} />
          {toggle && (<ul className='list-none w-40 flex flex-col gap-3 absolute top-16 right-2 p-6 rounded-lg items-start justify-center h-36 bg-gradient-to-r from-gray-700 via-gray-800 to-primary hover:transition-all '>
            {navLinks.map(({ id, title }) =>
              <li key={id} className={`${active === title ? 'text-white' : 'text-secondary'} hover:text-white font-poppins text-[16px] font-medium cursor-pointer`} onClick={() => {
                setActive(title)
                setToggle(!toggle)
              }}>
                <a href={`#${id}`}>{title}</a>
              </li>
            )}
          </ul>)}
        </div>

        {/* on large screen  */}
        <ul className='list-none hidden md:flex  gap-32 px-4 py-2 rounded-lg bg-gradient-to-r from-[#243c5a70] via-gray-900 to-transparent hover:transition-all'>
          {navLinks.map(({ id, title }) =>
            <li key={id} className={`${active === title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(title)}>
              <a href={`#${id}`}>{title}</a>
            </li>
          )}
        </ul>

      </div>
    </nav >
  )
}

export default Navbar