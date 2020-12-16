import React, {Component} from "react";
import { Link } from "react-router-dom";
import DashboardContainer from './DashboardContainer';

import UserNavbar from './UserNavbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function DashboardComponents (props){
  return(
    <>

    <UserNavbar/>

         <Breadcrumb>
         <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
         </Breadcrumb>

           <Container>

       <br />
       <br />
       <br />
       <br />



    <Row>
      <Col>
        </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="img/DashLogo1.png" />
  <Card.Body>
    <Card.Title>Addtime</Card.Title>
    <Card.Text>
     Helping is our priority, to add your arrival and departure time click here.
    </Card.Text>
    <Button variant="primary" href='addtime'>AddTime</Button>
  </Card.Body>
</Card>
    </Col>
      <Col>
        </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="img/DashLogo2.png" />
  <Card.Body>
    <Card.Title>History</Card.Title>
    <Card.Text>
     Your comfort is our priority, to see all your records and carry out your accounts, click here.
    </Card.Text>
    <Button variant="primary"href='/History'>History</Button>
  </Card.Body>
</Card>
    </Col>
      <Col>
        </Col>
    </Row>
   </Container>
    </>

  )
}

export default DashboardComponents;
