import React, {Component} from "react";


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function AnonNavbar(props){
  return(
   <>
           <Navbar bg='dark' variant='primary'>
           <Navbar.Brand href='#home'>
           <img src='./img/LogoTA.png'
           width = '100' height= '100'
           />&nbsp;

           TimeAttendance
           </Navbar.Brand>
           <Nav className= 'mr-auto'>
               <Nav.Link href='/'>Home </Nav.Link>
               <Nav.Link href='/login'>Login </Nav.Link>
               <Nav.Link href='/register'>Register </Nav.Link>
           </Nav>
     </Navbar>

    </>
  );
}

export default AnonNavbar;
