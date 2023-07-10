// Markup for the Navbar component

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function NavBar() {
  return (
    <div className='nav-wrapper flex pl-[20rem] pr-[20rem] bg-white/30 border-b border-white'>
      <nav className='nav-bar flex w-full m-10'>
          <div className='logo-container flex gap-2 items-center mr-auto'>
            <Link to='/' className='nav-bar-logo text-2xl text-purple'><i className='fa-solid fa-cloud'></i></Link>
            <span className='text-2xl font-semibold tracking-tight'>pixie</span>
          </div>
          <div className='nav-menu-items flex items-center gap-12 font-semibold'>
            <a href='/'>Import</a>
            <a href='/'>About</a>
            <a href='/'>Help</a>
            <a href='/' className='bg-purple p-3 rounded-xl text-white'>Chrome Extension</a>
          </div>
      </nav>
    </div>
  )
}

export default NavBar
