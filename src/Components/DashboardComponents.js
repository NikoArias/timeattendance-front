import React, {Component} from "react";
import { Link } from "react-router-dom";
import DashboardContainer from './DashboardContainer';

import UserNavbar from './UserNavbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function DashboardComponents (props){
  return(
    <>

    <UserNavbar
    />


    <br />
    <br />
    <br />
    <br />

    <Card className="text-center">
  <Card.Header>AddTime</Card.Header>
  <Card.Body>
    <Card.Title>Add time of work.</Card.Title>
    <Card.Text>
    To schedule your arrival and departure time press the link below.
    </Card.Text>
    <Button variant="primary" href='/addtime'>Click Here</Button>
  </Card.Body>
  <Card.Footer className="text-muted">TimeAttendance App</Card.Footer>
</Card>


<br />
<br />
<br />
<br />

<Card className="text-center">
<Card.Header>History</Card.Header>
<Card.Body>
<Card.Title>See your History</Card.Title>
<Card.Text>
  To see your working hours and scheduled schedules enter the link below.
</Card.Text>
<Button variant="primary" href='./history'>Click Here</Button>
</Card.Body>
<Card.Footer className="text-muted">TimeAttendance App</Card.Footer>
</Card>

    </>

  )
}

export default DashboardComponents;
