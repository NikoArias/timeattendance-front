import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AnonNavBar from "./AnonNavbar.js"
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";



function RegisterComponent (props){
  const { username, password, error, onUsernameChange, onPasswordChange, onClick, fullname, onFullNameChange} = props;
      return (
          <>
          <AnonNavBar/>

          <Breadcrumb>
     <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
     <Breadcrumb.Item href='/login'>
       Login
     </Breadcrumb.Item>
     <Breadcrumb.Item active>Register</Breadcrumb.Item>
   </Breadcrumb>

          <Container>
            <Row>
              <Col>
              <h1>Register</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                {error &&
                    <><b>{error}<br /><br /></b></>
                }
                <input name="username"
                       type="text"
                       id="username"
                       onChange={onUsernameChange}
                       value={username}
                       placeholder="username" />
              </Col>
              <Col>
              <input name="fullname"
                     type="text"
                     id="fullname"
                     onChange={onFullNameChange}
                     value={fullname}
                     placeholder="fullname" />
              </Col>
              <Col>
              <input name="password"
                     type="password"
                     id="password"
                     onChange={onPasswordChange}
                     value={password}
                     placeholder="password" />
              </Col>
              <Col>
                      <Button
                        onClick={onClick}>  Submit
                      </Button>
              </Col>
              <Col>
                  <Alert.Link href="/login">login</Alert.Link>
              </Col>
            </Row>
          </Container>

          <br />
          <br />
          <br />
          <br />

          <Card className="bg-dark text-white">

            <Card.Img src="img/Banner3.png" alt="Card image" />
            <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            </Card>
          </>
      );
  }
export default RegisterComponent;
