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

      <nav className="navbarOption">
        <ul>
          <li><a href="/buy">Buy</a></li>
          <li><a href="/sell">Sell</a></li>
          <li><a href="/agents">Agents</a></li>
          <li><a href="/properties">Properties</a></li>
          <li><a href="/about">About Us</a></li>
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
        <a href="/profile"><CgProfile size={30}/></a>
      </div>

    </div>

    
  )
}

export default Navbar;