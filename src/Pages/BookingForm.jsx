import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function BookingForm() {

    const[values,setValues]=useState({
        fullname:"",
        adults:"",
        checkin:"",
        children:"",
        checkout:"",
        phonenumber:"",
        time:""
       })
     
       const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${period}`;
      };
  
  

      const navigate = useNavigate()

      const handleLogin = () => {
         const formattedValues = { ...values, time: formatTime(values.time) };
        if (values.fullname && values.adults && values.checkin && values.children && values.checkout && values.phonenumber && values.time) {
          axios.post('http://localhost:8000/Booking', formattedValues)
            .then(response => console.log(response))
            .catch(error => console.error(error));
             navigate('/bookingsuccess')
        }
      }

      const [validated, setValidated] = useState(false);

      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div>
        
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{border:'1px solid',backgroundColor:'white'}} name='bookingForm' className='p-5'>
          <h2 style={{fontFamily:'"Gilda Display", serif'}} className='text-center'>Book Your Apartment</h2>
          <br />
          <Row className='pb-3'>
            <Col>
               <Form.Control className='input' size="lg"  placeholder="Full Name" name="fullname" required defaultValue="" controlId="validationCustom01"  
                onChange={e=>setValues({...values,fullname:e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
            </Col>

          </Row>

          <Row>
            <Col>
            <Form.Control className='input' size="lg" placeholder="Adults" name='adults' required defaultValue="" controlId="validationCustom02" 
             onChange={e=>setValues({...values,adults:e.target.value})}/>
            <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
            </Col>
            <Col>
            <InputGroup className="mb-3" >
               <InputGroup.Text id="basic-addon3" >
                Check-In
               </InputGroup.Text>
               <Form.Control id="basic-url" aria-describedby="basic-addon3" type='date' name='checkin' required defaultValue="" controlId="validationCustom03"
                onChange={e=>setValues({...values,checkin:e.target.value})}/>
                <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>             
               </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
            <Form.Control className='input' size="lg" placeholder="Children" name='children' required defaultValue="" controlId="validationCustom04"
             onChange={e=>setValues({...values,children:e.target.value})}/>
            <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>          
            </Col>

            <Col>
            <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon3">
                Check-Out
               </InputGroup.Text>
               <Form.Control id="basic-url" aria-describedby="basic-addon3" type='date' name='checkout' required defaultValue="" controlId="validationCustom05"
                onChange={e=>setValues({...values,checkout:e.target.value})}/>
                <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
               </InputGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
               <Form.Control className='input' size="lg" placeholder="Phone number" name='phonenumber' required  defaultValue="" controlId="validationCustom06"
                onChange={e=>setValues({...values,phonenumber:e.target.value})}/>
               <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
            </Col>

            <Col>
            <InputGroup className="mb-3">
               <InputGroup.Text id="basic-addon3">
                Time
               </InputGroup.Text>
               <Form.Control id="basic-url" aria-describedby="basic-addon3" type='time' name='time' required defaultValue="" controlId="validationCustom07"
                onChange={e=>setValues({...values,time:e.target.value})}/>
               <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>

               </InputGroup>

            </Col>
          </Row>
        
          <Row>
            <Col className="d-grid gap-2">
              <Button  size="lg" type='submit'  style={{ background: '#fd7792',border:'0px',fontSize:'12px',fontWeight: '500',height:'50px',letterSpacing:'3px'}}  onClick={handleLogin}>
             
              BOOK APARTMENT NOW
              </Button>{' '}

            
            </Col>
          </Row>
          <br />
        </Form>

        </div>

        
    </div>
  )
}

export default BookingForm