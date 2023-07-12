import React, { Component } from 'react'
import Cards from '../components/Cards'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export class Mediapage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Cards/>
        <Footer/>
      </div>
    )
  }
}

export default Mediapage
