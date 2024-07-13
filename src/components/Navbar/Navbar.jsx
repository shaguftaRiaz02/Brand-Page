// import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/brand_logo.png'
const Navbar = () => {
  return (
    <>
    <nav>
        <div className='logo'>
            <img src={Logo}></img>
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>Login</button>
        </nav>
    </>
  )
}

export default Navbar
