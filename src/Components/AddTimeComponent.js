import React, {Component} from "react";
import { Link } from "react-router-dom";

import UserNavbar from './UserNavbar';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


function AddTimeComponent (props){
  const{
     arrhour, leahour, date, onArrHourChange, onLeaHourChange, onDateChange, onClick
  }=props;
  return(
    <>

    <UserNavbar/>

    <br />
    <br />


    <Form>
      <Row>

       <Col>
      <Form.Control placeholder="Arrive Hour" value={arrhour} onChange={onArrHourChange}/>
       </Col>
       <Col>
      <Form.Control placeholder="Leave Hour" value={leahour} onChange={onLeaHourChange}/>
       </Col>
       <Col>
         <Form.Control placeholder="Date" value={date} onChange={onDateChange}/>
       </Col>
      </Row>
      </Form>

      <Button variant='primary' onClick={onClick} type='Button'> Submit </Button>

      <br />
      <br />

      <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

        <p> Go back <Link to="/"> Logout Here</Link></p>

    </>

  )
}

export default AddTimeComponent;
