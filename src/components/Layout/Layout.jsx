import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import FooterSection from '../footersection/Footersection'



function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <FooterSection/>
    </div>
  )
}

export default Layout