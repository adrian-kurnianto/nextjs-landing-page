'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'


function ResponsiveNavbar() {

  const [showMobileNav, setShowMobileNav] = useState(false)
  const handleShowMobileNav = () => {
    setShowMobileNav(true)
  }


  const handleHideMobileNav = () => {
    setShowMobileNav(false)
  }

  return (
    <div>
      <Navbar openNav={handleShowMobileNav} />
      <MobileNavbar showNav={showMobileNav} closeNav={handleHideMobileNav} />
    </div>
  )
}

export default ResponsiveNavbar