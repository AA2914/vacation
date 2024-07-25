import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Apartment() {
  return (
    <>

<h1 className='text-center pt-5 pb-4' style={{fontFamily:'"Gilda Display", serif'}}>Apartment Room</h1>

    <Row xs={1} md={4} className="g-0 text-center " >
        <Col>
          <Card style={{height:'400px'}}>
            <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/room-1.jpg" height={'400px'}/>
          </Card>
        </Col>
       
        <Col>
          <Card style={{height:'400px'}}>
           <Card.Body>
          <h4 style={{color:'#fd7792'}} className='pt-5'> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h4>
           <Card.Title>
            <h1 style={{fontFamily:'"Gilda Display", serif'}}>Suite Room</h1>
            </Card.Title>
           <Card.Text>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Max:</span> 3 Persons</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Size:</span> 45 m2</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>View:</span> Sea View</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Bed:</span> 1</h6>
           </Card.Text>
           <Link to={'/view-room/1'}><Button variant="outline-secondary" style={{color:'black'}}>View Room Details</Button>{' '}</Link>
           </Card.Body>
         </Card>
        </Col>


        <Col>
          <Card style={{height:'400px'}}>
            <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/room-2.jpg" height={'400px'}/>
          </Card>
        </Col>
       
        <Col>
          <Card style={{height:'400px'}}>
           <Card.Body>
           <h4 style={{color:'#fd7792'}} className='pt-5'> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h4>
           <Card.Title>
            <h1 style={{fontFamily:'"Gilda Display", serif'}}>Standard Room</h1>
            </Card.Title>
            <Card.Text>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Max:</span> 3 Persons</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Size:</span> 45 m2</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>View:</span> Sea View</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Bed:</span> 1</h6>
           </Card.Text>
           <Link to={'/view-room/2'}><Button variant="outline-secondary" style={{color:'black'}}>View Room Details</Button>{' '}</Link>
           </Card.Body>
         </Card>
        </Col>

    </Row>


    <Row xs={1} md={4} className="g-0 text-center pb-5">

    <Col>
          <Card style={{height:'400px'}}>
           <Card.Body>
           <h4 style={{color:'#fd7792'}} className='pt-5'> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h4>
           <Card.Title>
            <h1 style={{fontFamily:'"Gilda Display", serif'}}>Family Room</h1>
            </Card.Title>
            <Card.Text>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Max:</span> 3 Persons</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Size:</span> 45 m2</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>View:</span> Sea View</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Bed:</span> 1</h6>
           </Card.Text>
           <Link to={'/view-room/3'}><Button variant="outline-secondary" style={{color:'black'}}>View Room Details</Button>{' '}</Link>
           </Card.Body>
         </Card>
        </Col>



        <Col>
          <Card style={{height:'400px'}}>
            <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/room-3.jpg" height={'400px'}/>
          </Card>
        </Col>
       
        <Col>
          <Card style={{height:'400px'}}>
           <Card.Body>
           <h4 style={{color:'#fd7792'}} className='pt-5'> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h4>
           <Card.Title>
            <h1 style={{fontFamily:'"Gilda Display", serif'}}>Deluxe Room</h1>
            </Card.Title>
            <Card.Text>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Max:</span> 3 Persons</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Size:</span> 45 m2</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>View:</span> Sea View</h6>
           <h6 style={{color:'grey'}}><span style={{color:'black'}}>Bed:</span> 1</h6>
           </Card.Text>
           <Link to={'/view-room/4'}><Button variant="outline-secondary" style={{color:'black'}}>View Room Details</Button>{' '}</Link>
           </Card.Body>
         </Card>
        </Col>


        <Col>
          <Card style={{height:'400px'}}>
            <Card.Img variant="top" src="https://themewagon.github.io/vacation-rental/images/room-4.jpg" height={'400px'}/>
          </Card>
        </Col>
       
       

    </Row>
  
    
    </>
  )
}

export default Apartment