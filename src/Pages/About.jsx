import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Contact from './Contact';
import Footer from './Footer';
import { Navbar } from 'react-bootstrap';


function About() {

  return (
    <>

   <Navbar style={{backgroundColor:'#fd7792'}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/home" className='text-light'>Back</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <section id='about' style={{fontFamily:'"Gilda Display", serif',backgroundColor:' rgb(231, 229, 229)',paddingBottom:'50px'}}>
      <h1 className='text-center pt-4 pb-3'>About Us</h1>
 <Container >
    <Row xs={1} md={3} className="justify-content-center  g-5">
        <Col >
        <Card  className="text-center " style={{padding:'30px',width:'370px',height:'400px',border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/services-1.jpg" />
        <Card.Body>
          <Card.Title style={{fontSize:'28px',fontFamily:'"Playfair Display", serif'}}>Map Direction</Card.Title>
          <Card.Text style={{color:'grey',fontWeight:'500'}}>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          {/* <span >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptate odio ut maxime cum doloremque veritatis fugit voluptatem, delectus ipsa corporis! Corrupti sequi ratione eum necessitatibus quos perspiciatis nemo ipsa?</span> */}

          </Card.Text>
          
        </Card.Body>
      </Card>
        </Col>

        <Col >
        <Card className="text-center" style={{padding:'30px',width:'370px',height:'400px',border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/services-2.jpg" />
        <Card.Body>
          <Card.Title style={{fontSize:'28px',fontFamily:'"Playfair Display", serif'}}>Accomodation Services</Card.Title>
          <Card.Text style={{color:'grey',fontWeight:'500'}}>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </Card.Text>
          
        </Card.Body>
      </Card>
        </Col>

        <Col>
        <Card className="text-center" style={{padding:'30px',width:'370px',height:'400px',border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/services-3.jpg" />
        <Card.Body>
          <Card.Title style={{fontSize:'28px',fontFamily:'"Playfair Display", serif'}}>Great Experience</Card.Title>
          <Card.Text style={{color:'grey',fontWeight:'500'}}>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
          </Card.Text>
         
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>

    </section>

<Contact/>
<Footer/>
    </>
  )
}

export default About