import React from 'react'
import Navbar from './navbar'
import TopBar from './topbar'

const Header = () => {
  return (
    <section className='header'>
        <TopBar/>
        <Navbar/>
    </section>
  )
}

export default Header
