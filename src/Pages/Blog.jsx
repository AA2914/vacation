import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { BiSolidMessageRounded } from "react-icons/bi";
import Contact from './Contact'
import Footer from './Footer';
import { Navbar } from 'react-bootstrap';

function Blog() {
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


    <section style={{backgroundColor:'#dddddf '}} >
    <h1 className='text-center pt-5' style={{fontFamily:'"Gilda Display", serif'}}>Latest news from our blog</h1>
    <h6 className='text-center pb-5' style={{ color: '#fd7792',letterSpacing:'2px'}}>NEWS & BLOG</h6>
<Container className='pt-2 pb-5'>

    <Row xs={1} md={3} className="justify-content-md-center pb-5" >
        <Col >
        <Card  className="text-center" style={{border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/image_1.jpg" />
        <Card.Body>
          <Card.Title>
           <h3 style={{fontFamily:'"Gilda Display", serif'}} className='pt-3 '>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
          </Card.Title>
          <Card.Text>
           <h6 style={{ color: '#fd7792'}} className='pt-3'>January 30, 2020 <BiSolidMessageRounded /> Admin  3</h6>
           <p style={{color:'grey',fontWeight:600}} className='pt-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>

        <Col>
        <Card className="text-center" style={{border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/image_2.jpg" />
        <Card.Body>
          <Card.Title>
           <h3 style={{fontFamily:'"Gilda Display", serif'}} className='pt-3'>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
          </Card.Title>
          <Card.Text>
           <h6 style={{ color: '#fd7792'}} className='pt-3'>January 30, 2020 <BiSolidMessageRounded /> Admin  3</h6>
           <p style={{color:'grey',fontWeight:600}} className='pt-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>

        <Col >
        <Card className="text-center" style={{border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/image_3.jpg" />
        <Card.Body>
          <Card.Title>
           <h3 style={{fontFamily:'"Gilda Display", serif'}} className='pt-3 '>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
          </Card.Title>
          <Card.Text>
           <h6 style={{ color: '#fd7792'}} className='pt-3'>January 30, 2020 <BiSolidMessageRounded /> Admin  3</h6>
           <p style={{color:'grey',fontWeight:600}} className='pt-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>

      <Row xs={1} md={3} className="justify-content-md-center " >
        <Col >
        <Card  className="text-center" style={{border:'0px'}}>
        <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/image_4.jpg" />
        <Card.Body>
          <Card.Title>
           <h3 style={{fontFamily:'"Gilda Display", serif'}} className='pt-3'>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
          </Card.Title>
          <Card.Text>
           <h6 style={{ color: '#fd7792'}} className='pt-3'>January 30, 2020 <BiSolidMessageRounded /> Admin  3</h6>
           <p style={{color:'grey',fontWeight:600}} className='pt-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>

        <Col>
        <Card className="text-center" style={{border:'0px'}}>
        <Card.Img variant="top" src="	https://themewagon.github.io/vacation-rental/images/image_5.jpg" height={'240px'}/>
        <Card.Body>
          <Card.Title>
           <h3 style={{fontFamily:'"Gilda Display", serif'}} className='pt-3 '>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
          </Card.Title>
          <Card.Text>
           <h6 style={{ color: '#fd7792'}} className='pt-3'>January 30, 2020 <BiSolidMessageRounded /> Admin  3</h6>
           <p style={{color:'grey',fontWeight:600}} className='pt-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>

        <Col>
        <Card className="text-center" style={{border:'0px'}}>
        <Card.Img variant="top" src="	https://themewagon.github.io/vacation-rental/images/image_6.jpg" />
        <Card.Body>
          <Card.Title>
           <h3 style={{fontFamily:'"Gilda Display", serif'}} className='pt-3 '>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
          </Card.Title>
          <Card.Text>
           <h6 style={{ color: '#fd7792'}} className='pt-3'>January 30, 2020 <BiSolidMessageRounded /> Admin  3</h6>
           <p style={{color:'grey',fontWeight:600}} className='pt-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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

export default Blog