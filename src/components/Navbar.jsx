import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <header>
        <nav className='container'>
            <div className="logo">
                <NavLink to="/"><h2>Dilawar khan</h2></NavLink>
                </div>
            <div className="nav_link">
            <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar