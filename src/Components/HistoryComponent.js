import React, {Component} from "react";
import { Link } from "react-router-dom";

import UserNavbar from './UserNavbar';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HistoryComponent (props){
  const{data}=props;
  return(
    <>

    <UserNavbar/>

    <br />
    <br />

    <Row>
    <Col>
    </Col>
    <Col>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Hour of arrive/leave</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nick</td>
          <td>6:00 AM / 6:00 PM </td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Sebastian</td>
          <td>6:00 AM / 6:00 PM</td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Luis</td>
          <td>6:00 AM / 6:00 PM</td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Nick</td>
          <td>6:00 AM / 6:00 PM </td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Sebastian</td>
          <td>6:00 AM / 6:00 PM</td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Luis</td>
          <td>6:00 AM / 6:00 PM</td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Nick</td>
          <td>6:00 AM / 6:00 PM </td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Sebastian</td>
          <td>6:00 AM / 6:00 PM</td>
          <td>09/11/2020</td>
        </tr>
        <tr>
          <td>Luis</td>
          <td>6:00 AM / 6:00 PM</td>
          <td>09/11/2020</td>
        </tr>
      </tbody>
    </Table>
    </Col>

    <Col>
    </Col>

    </Row>


    </>

  )
}

export default HistoryComponent;
