import React, { Component } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Cards from '../components/Cards'

export class Stylesheet extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="stylesheet-wrapper px-12 py-[4rem]">
            <div className="headings">
                <h4 className='text-md font-extrabold tracking-[-0.04em] sm:text-xl py-2 text-purple-dark'>Headings</h4>
                <h1 className='text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl py-2'>Lorem ipsum dolor sit amet</h1>
                <h2 className='text-2xl font-extrabold tracking-[-0.04em] sm:text-4xl py-2'>Lorem ipsum dolor sit amet</h2>
                <h3 className='text-xl font-extrabold tracking-[-0.04em] sm:text-3xl py-2'>Lorem ipsum dolor sit amet</h3>
                <h4 className='text-lg font-extrabold tracking-[-0.04em] sm:text-2xl py-2'>Lorem ipsum dolor sit amet</h4>
                <h4 className='text-md font-extrabold tracking-[-0.04em] sm:text-xl py-2'>Lorem ipsum dolor sit amet</h4>
                <h5 className='text-sm font-extrabold tracking-[-0.04em] sm:text-lg py-2'>Lorem ipsum dolor sit amet</h5>
            </div>
            <div className="paragraphs">
                <h4 className='text-md font-extrabold tracking-[-0.04em] sm:text-xl py-2 text-purple-dark'>Paragraphs</h4>
                <p className='p-sm text-sm py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='p-md text-md py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='p-lg text-lg py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <h4 className='text-md font-extrabold tracking-[-0.04em] sm:text-xl py-2 text-purple-dark'>Cards</h4>
            <Cards />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Stylesheet
