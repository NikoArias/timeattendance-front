import React, {Component} from "react";
import { Link } from "react-router-dom";

import UserNavbar from './UserNavbar';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function AddTimeComponent (props){
  const{
     arrhour, leahour, date, onArrHourChange, onLeaHourChange, onDateChange, onClick
  }=props;
  return(
    <>

    <UserNavbar/>

    <Breadcrumb>
<Breadcrumb.Item href='/dashboard'>Dashboard</Breadcrumb.Item>
<Breadcrumb.Item active> AddTime</Breadcrumb.Item>
<Breadcrumb.Item href='history'>History</Breadcrumb.Item>
</Breadcrumb>
      <Container>

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

      <br />
      <br />

      <Row>
      <Col>
      </Col>
      <Col>
      <Button variant='primary' onClick={onClick} type='Button' size='lg' block> Submit </Button>
      </Col>
      <Col>
      </Col>
      </Row>





      <br />
      <br />

<Row>
<Col>
<Card style={{ width: '30rem' }} bg='info'>

<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the bulk of
the card's content.
</Card.Text>

</Card.Body>
</Card>

</Col>
<Col>
<Card style={{ width: '30rem' }} bg='warning'>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>

</Col>
</Row>

<br />
<br />


<Card>
  <Card.Img variant="bottom" src="img/Banner.png" />
</Card>

  </Container>
    </>

  )
}

export default AddTimeComponent;
