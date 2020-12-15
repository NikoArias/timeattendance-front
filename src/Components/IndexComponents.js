import React, {Component} from "react";
import { Link } from "react-router-dom";
import AnonNavbar from './AnonNavbar.js';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function IndexComponents(props)  {
     return(
       <>

       <AnonNavbar/>

       <Breadcrumb>
  <Breadcrumb.Item active>Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/login">
    Login
  </Breadcrumb.Item>
  <Breadcrumb.Item href='/register'>Register</Breadcrumb.Item>
</Breadcrumb>


       <Carousel>

         <Carousel.Item>
            <img
                 className="d-block w-100"
                 src="img/Tran1.png"
                 alt="First slide"
             />
        <Carousel.Caption>
                 <h3>blabla</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="img/Tran2.png"
                      alt="Second slide"
        />

        <Carousel.Caption>
                  <h3>blabla </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="img/Tran3.jpg"
                      alt="Third slide"
        />

        <Carousel.Caption>
                   <h3>blablabla</h3>
                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

        <br />
          <br />
            <br />

        <CardGroup>


        <Card>
        <Card.Img variant="top" src="img/Card1.jpg" />
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
        </Card.Text>
         </Card.Body>
       <Card.Footer>
               <small className="text-muted">TimeAttendance App</small>
      </Card.Footer>
      </Card>
      <Card>
             <Card.Img variant="top" src="img/Card2.jpg" />
      <Card.Body>
             <Card.Title>Card title</Card.Title>
      <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
      </Card.Text>
        </Card.Body>
          <Card.Footer>
            <small className="text-muted">TimeAttendance App</small>
       </Card.Footer>
     </Card>
  <Card>
        <Card.Img variant="top" src="img/Card3.jpg" />
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This card has even longer content than the first to
           show that equal height action.
         </Card.Text>
       </Card.Body>
       <Card.Footer>
                 <small className="text-muted">TimeAttendance App</small>
      </Card.Footer>
     </Card>
    </CardGroup>

       </>
     );
   }

export default IndexComponents;
