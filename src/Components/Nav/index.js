import React, { useState } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [active, setActive] = useState(false)
  return (
    <div className='nav'>
      <div>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>

      <div className={active ? 'mobile-menu mobile-menu-item' : 'menu-item'}>
        <ul>
          <li className='nav-item'>
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/ranker'>$RANKER</NavLink>
          </li>
          <li className='nav-item'>
            <a href='https://discord.com/?msclkid=420a4fc7c56811ec906a3e372d297abf'>
              DISCORD
            </a>
          </li>
          <li className='nav-item'>
            <a href='https://webk.telegram.org/?msclkid=5319cf2cc56911ec8711208b26f3b8b6'>
              TELEGRAM
            </a>
          </li>
          <li className='nav-item'>
            <a href='https://twitter.com/GaneshTiwary13?t=Xli4cLUGfvC7kIcbYMnNmw&s=08'>
              TWITTER
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' download='../../assets/Source file.pdf'>
              DOWNLOAD
            </a>
          </li>
        </ul>
      </div>
      <div className='menu' onClick={() => setActive(!active)}>
        {active ? <FiX className='cancel' /> : <FiMenu className='menu-size' />}
      </div>
    </div>
  )
}

export default Navbar
