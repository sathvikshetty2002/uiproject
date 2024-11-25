import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home'>
      
    <div id="home1">
      <Link to="/index" id='link'>Home</Link>
      <br />
      
      <Link to="/login" id='link'>Login</Link>
      <br />
      
      <Link to="/cart" id='link'>Cart</Link>
      <br />
      <Link to="/profile" id='link'>Profile</Link>
      </div>
     
     <div id='home2'>
        <Outlet></Outlet>
     </div>
     
    </div>
  )
}

export default Home
