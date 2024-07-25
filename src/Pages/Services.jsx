import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsCheckCircleFill } from "react-icons/bs";
import Contact from './Contact';
import Footer from './Footer';

function Services() {
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


    <section id='section' style={{backgroundColor:' rgb(247, 245, 245)'}}>


    <h1 className='text-center pt-4 pb-3' style={{fontFamily:'"Gilda Display", serif'}}>Amenities</h1>
<Container>
    <Row  xs={1} md={4} className="g-3 mb-5">
     
        <Col>
          <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
            <Card.Body>
            <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
              <Card.Title>Tea Coffee</Card.Title>
              <Card.Text style={{color:'grey',fontWeight:'600'}}>
              A small river named Duden flows by their place and supplies it with the necessary
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
            <Card.Body>
            <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
              <Card.Title>Hot Showers</Card.Title>
              <Card.Text style={{color:'grey',fontWeight:'600'}}>
              A small river named Duden flows by their place and supplies it with the necessary
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
            <Card.Body>
            <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
              <Card.Title>Laundry</Card.Title>
              <Card.Text style={{color:'grey',fontWeight:'600'}}>
              A small river named Duden flows by their place and supplies it with the necessary
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
            <Card.Body>
            <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
              <Card.Title>Air Conditioning</Card.Title>
              <Card.Text style={{color:'grey',fontWeight:'600'}}>
              A small river named Duden flows by their place and supplies it with the necessary
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    
    </Row>
<br />
    <Row xs={1} md={4} className="g-3">
     
     <Col >
       <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
         <Card.Body>
         <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
           <Card.Title>Free Wifi</Card.Title>
           <Card.Text style={{color:'grey',fontWeight:'600'}}>
           A small river named Duden flows by their place and supplies it with the necessary
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>

     <Col >
       <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
         <Card.Body>
         <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
           <Card.Title>Kitchen</Card.Title>
           <Card.Text style={{color:'grey',fontWeight:'600'}}>
           A small river named Duden flows by their place and supplies it with the necessary
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>

     <Col >
       <Card className="text-center" style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
         <Card.Body>
         <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
           <Card.Title>Ironing</Card.Title>
           <Card.Text style={{color:'grey',fontWeight:'600'}}>
           A small river named Duden flows by their place and supplies it with the necessary
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>

     <Col >
       <Card className="text-center " style={{border:'0px',backgroundColor:' rgb(247, 245, 245)'}}>
         <Card.Body>
         <BsCheckCircleFill style={{fontSize:'50px',color:'#fd7792'}}/>
           <Card.Title>Lovkers</Card.Title>
           <Card.Text style={{color:'grey',fontWeight:'600'}}>
           A small river named Duden flows by their place and supplies it with the necessary
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

export default Services