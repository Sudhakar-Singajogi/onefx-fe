import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom'

function NavMenuBar() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link path="/" to ="/" className='nav-link' >OneFXLive</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link path="/signup" to ="/signup" className='nav-link' >Signup</Link>
            <Link path="/signin" to ="/signin" className='nav-link' >Signin</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
         
    </div>
  )
}

export default NavMenuBar