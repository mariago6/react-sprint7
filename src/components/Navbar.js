import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return(
    <div className="navbar">
      <ul className="nav-links">
        <Link to="/welcome">Welcome</Link>
        <Link to="/app">About</Link>
      </ul>
    </div>
  )
}

export default Navbar; 