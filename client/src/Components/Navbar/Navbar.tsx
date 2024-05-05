import React from 'react'
import { CgProfile } from "react-icons/cg";



import  "./Navbar.css"

const Navbar = () => {
  return (

    <div className="navbar-container">
      <div className="logo-div">
        <a href="/">
          <img src="/grpnaem-Logo.png"></img>
        </a>
      </div>

      <nav className="navbarContainer">
        <ul>
          <li>Buy</li>
          <li>Sell</li>
          <li>Agents</li>
          <li>Properties</li>
          <li>About Us</li>
        </ul>
      </nav>

      <div className="navbarSearch">
        <input
            type="text"
            placeholder="Search ..."
            //value={search}
            //onChange={(e) => setSearch(e.target.value)}
          />
      </div>

      <div className="navbarProfile">
        <a href="/profile"><CgProfile/></a>
      </div>

    </div>

    
  )
}

export default Navbar;