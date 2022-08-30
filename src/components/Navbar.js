import React from "react";
import {Link} from 'react-router-dom'
import {Nav, NavUl, NavLi} from '../styled'

function Navbar() {
  return(
    <Nav>
      <NavUl>
        <NavLi><Link className="link" to="/"> Welcome </Link></NavLi>
        <NavLi><Link className="link" to="/app"> Services </Link></NavLi>
      </NavUl>
    </Nav>
  )
}

export default Navbar; 