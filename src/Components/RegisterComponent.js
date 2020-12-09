import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AnonNavBar from "./AnonNavbar.js"


function RegisterComponent (props){
  const { username, password, error, onUsernameChange, onPasswordChange, onClick, fullname, onFullNameChange} = props;
      return (
          <>
          <AnonNavBar/>
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
          </>
      );
  }
export default RegisterComponent;
