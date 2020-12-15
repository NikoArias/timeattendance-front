import React, {Component} from "react";


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function UserNavbar(props){
  return(

           <Navbar bg='dark' variant='primary'>
           <Navbar.Brand href='#/'>
           <img src='./img/LogoTA.png'
           width = '100' height= '100'
           />&nbsp;

           TimeAttendance
           </Navbar.Brand>
           <Nav className = 'mr-auto'>
               <Nav.Link href='/dashboard'>Home </Nav.Link>
               <Nav.Link href='/'>Log out </Nav.Link>
               </Nav>
     </Navbar>
  );
}

export default UserNavbar;
