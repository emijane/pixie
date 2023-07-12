import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'


export class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Footer />
      </div>
    )
  }
}

export default Layout
