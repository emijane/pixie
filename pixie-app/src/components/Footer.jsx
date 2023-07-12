import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
        <div className="footer-wrapper flex flex-col items-center text-center">
            <div className='logo-container flex gap-2 lg:text-xl xs:text-sm'>
                <Link to='/' className='nav-bar-logo text-purple-default'><i className='fa-solid fa-cloud'></i></Link>
                <span className='font-semibold tracking-tight'>pixie</span>
            </div>
            <p className='text-xs text-black/70 m-3 leading-6 xs:w-9/12 sm:w-1/2 lg:w-1/3 xl:w-1/4 '>Some of the logos design and the artwork you are about to download are the intellectual property of the copyright and/or trademark holder and are offered to you as a convenience for lawful use with proper permission from the copyright and/or trademark holder only.</p>
        </div>
    )
  }
}

export default Footer
