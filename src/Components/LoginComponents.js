import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnonNavbar from './AnonNavbar.js';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';



function LoginComponents(props)  {
  const{
  email, password, onEmailChange, onPasswordChange, onSubmitClick
  }= props;
     return(
       <>

          <AnonNavbar/>

          <Breadcrumb>
     <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
     <Breadcrumb.Item active>
       Login
     </Breadcrumb.Item>
     <Breadcrumb.Item href='/register'>Register</Breadcrumb.Item>
   </Breadcrumb>

          <br />
          <br />
          <br />

          <Container>
             <Row>
               <Col>
                     <Image src="img/LoginImage2.png" rounded />
               </Col>

               <Col>


          <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" value={email} onChange={onEmailChange}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
    </Form.Group>

                 <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
                 </Form.Group>
                 <Form.Group controlId="formBasicCheckbox">
                 <Form.Check type="checkbox" label="Check me out" />
                 </Form.Group>
                 <Button variant="primary" type="Button" onClick={onSubmitClick} >
                 Submit
                <Link to= '/dashoard'/>
                </Button>
    </Form>

           </Col>
           </Row>
          </Container>
       </>
     );
   }

export default LoginComponents;
