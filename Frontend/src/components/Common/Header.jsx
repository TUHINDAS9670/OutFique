import React from 'react'
import TopBar from '../Layout/TopBar'
import Navbar from './Navbar'
import CartDrawer from '../Layout/CartDrawer'

const Header = () => {
  return (
    <header className='border-b-2 border-gray-200'>
      {/* TOp bar */}
      <TopBar/>
      {/* navbar */}
      <Navbar/>
      {/* Cart Drawer */}
      
    </header>
  )
}

export default Header