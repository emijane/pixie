// Markup for the Navbar component

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  return (
    <div className='nav-wrapper flex xl:pl-[20rem] sm:pl-[00rem] xl:pr-[20rem] sm:pr-[0rem] bg-white/30 border-b border-white'>
      <nav className='nav-bar flex w-full m-10'>
          <div className='logo-container flex gap-2 items-center mr-auto'>
            <Link to='/' className='nav-bar-logo text-2xl text-purple-default'><i className='fa-solid fa-cloud'></i></Link>
            <span className='text-2xl font-semibold tracking-tight'>pixie</span>
          </div>
          <div className='nav-menu-items flex items-center gap-12 font-semibold '>
            <a href='/' className='text-md hover:text-purple-dark transition ease-in-out delay-25'>Import Media</a>
            <a href='/' className='text-md hover:text-purple-dark transition ease-in-out delay-25'>About</a>
            <a href='/' className='text-md hover:text-purple-dark transition ease-in-out delay-25'>Help</a>
            <a href='/' className='bg-purple-default p-3 rounded-xl text-white hover:bg-purple-dark transition ease-in-out delay-25'>Chrome Extension</a>
              <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-xl bg-purple-default p-3 text-md font-semibold text-white hover:bg-purple-dark transition ease-in-out delay-25">
                  Menu
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? 'bg-purple-xl text-gray-900 transition ease-in-out delay-50' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          Import Media
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? 'bg-purple-xl text-gray-900 transition ease-in-out delay-50' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          About
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? 'bg-purple-xl text-gray-900 transition ease-in-out delay-50' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          Help
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? 'bg-purple-xl text-gray-900 transition ease-in-out delay-50' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          Chrome Extension
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="/">
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
      </nav>
    </div>
  )
}

export default NavBar
