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
</Breadcrumb>


       <Carousel>

         <Carousel.Item>
            <img
                 className="d-block w-100"
                 src="img/Tran1.png"
                 alt="First slide"
             />
        <Carousel.Caption>
                 <h3>Take into account your work</h3>
                 <p>With this app keep an order of your work times</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="img/Tran2.png"
                      alt="Second slide"
        />

        <Carousel.Caption>
                  <h3>Don't waste a minute </h3>
                  <p>Manage your schedule without worries</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="img/Tran3.jpg"
                      alt="Third slide"
        />

        <Carousel.Caption>
                   <h3>take control of your work</h3>
                   <p>Work hand in hand with your bosses</p>
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
        <Card.Title>Projects</Card.Title>
        <Card.Text>
                be clear about the working hours and schedules you handle, keep in mind that your projects are very important to us.
        </Card.Text>
         </Card.Body>
       <Card.Footer>
               <small className="text-muted">TimeAttendance App</small>
      </Card.Footer>
      </Card>
      <Card>
             <Card.Img variant="top" src="img/Card2.jpg" />
      <Card.Body>
             <Card.Title>Works</Card.Title>
      <Card.Text>
          fight for your dreams and with these tools work hard to make them come true{' '}
      </Card.Text>
        </Card.Body>
          <Card.Footer>
            <small className="text-muted">TimeAttendance App</small>
       </Card.Footer>
     </Card>
  <Card>
        <Card.Img variant="top" src="img/Card3.jpg" />
        <Card.Body>
        <Card.Title>Analyze</Card.Title>
        <Card.Text>
        the best of you is what we hope for that is why we help you to organize your schedules.
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
