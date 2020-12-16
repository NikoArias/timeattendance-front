import React, {Component} from "react";
import { Link } from "react-router-dom";

import UserNavbar from './UserNavbar';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

function HistoryComponent (props){
  const{data}=props;

  function renderTableItem(datum){
    return(
      <tr>
      <td>
      {datum.arrhour}
      </td>
      <td>
      {datum.leahour}
      </td>
      <td>
      {datum.date}
      </td>
      </tr>
    );
  }
  return(
    <>

    <UserNavbar/>
    <Breadcrumb>
<Breadcrumb.Item href='/dashboard'>Dashboard</Breadcrumb.Item>
<Breadcrumb.Item active>History</Breadcrumb.Item>
</Breadcrumb>
    <Container>

    <br />
    <br />

    <Row>
    <Col>
    <Card style={{ width: '20rem' }} bg='primary'>
      <Card.Body>
        <Card.Title>Your schedules</Card.Title>
        <Card.Text>
          All your entry and exit times will be stored here, never forget to enter the values correctly so that it is well understood.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Hour of arrive</th>
          <th>Hour of leave</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {data && data.map(renderTableItem)}
      </tbody>
    </Table>
    </Col>

    <Col>

    <Card style={{ width: '20rem' }} bg='primary'>
      <Card.Body>
        <Card.Title>Technical problems?</Card.Title>
        <Card.Text>
If you have any questions or problems, do not hesitate to approach the main office to fix any type of doubt you may have, we are here to help you.
        </Card.Text>
      </Card.Body>
    </Card>

    </Col>

    </Row>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />



    <Card>
      <Card.Img variant="bottom" src="img/BannerHistory.png" />
    </Card>

</Container>
    </>

  )
}

export default HistoryComponent;
