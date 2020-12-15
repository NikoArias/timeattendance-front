import React, {Component} from "react";
import { Link } from "react-router-dom";

import UserNavbar from './UserNavbar';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

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
<Breadcrumb.Item href='/addtime'> AddTime</Breadcrumb.Item>
<Breadcrumb.Item active>History</Breadcrumb.Item>
</Breadcrumb>
    <Container>

    <br />
    <br />

    <Row>
    <Col>
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
    </Col>

    </Row>

</Container>
    </>

  )
}

export default HistoryComponent;
