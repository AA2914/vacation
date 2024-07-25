import axios from 'axios'
import './Register.css';
import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

  const [registerName, setregisterName] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: ''
  })
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()
 

const handleRegister=((event)=>{
      event.preventDefault();

      let tempErrors = {};
      let isValid = true;
  
      if (!registerName.name) {
        tempErrors["name"] = "Name is required";
        isValid = false;
    }
    
      if (!registerName.email) {
          tempErrors["email"] = "Email is required";
          isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(registerName.email)) {
          tempErrors["email"] = "Email is not valid";
          isValid = false;
      }
    
      if (!registerName.password) {
          tempErrors["password"] = "Password is required";
          isValid = false;
      }
    
      if (!registerName.phonenumber) {
        tempErrors["phonenumber"] = "Phone number is required";
        isValid = false;
    }
  
    if(isValid){
      event.preventDefault();
           axios.post('http://localhost:8000/Register',registerName)
           .then(response=>{console.log(response);})
           .catch(err=>console.log(err))
            alert('Register Successfull')
            navigate('/')
   
    }else {
      setErrors(tempErrors);
  }

     
    
   })

  return (
    <section id='register' style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
      <div >
        <Form  onSubmit={handleRegister} style={{ border: '1px solid', width: "400px" }} className='pt-3 ps-3 pe-3'>
          <h1 className='text-center ' style={{ fontStyle: "italic", color: 'white' }}> Register Page </h1>

          <Row >

            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                onChange={e => setregisterName({ ...registerName, name: e.target.value })}
              />
             {errors.name && <div className="invalid-feedback">{errors.name}</div>}

            </Form.Group>


            <Form.Group >
              <Form.Label className='pt-2'>Email</Form.Label>
              <Form.Control required type="email" placeholder="name@example.com" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={e => setregisterName({ ...registerName, email: e.target.value })}
              />
               {errors.email && <div className="invalid-feedback">{errors.email}</div>}

            </Form.Group>


          </Row>

          <Row >

          <Form.Group >
              <Form.Label className='pt-2'>Password</Form.Label>
              <Form.Control required type="password" placeholder="password" 
               className={`form-control ${errors.password ? 'is-invalid' : ''}`}

                onChange={e => setregisterName({ ...registerName, password: e.target.value })}
              />
               {errors.password && <div className="invalid-feedback">{errors.password}</div>}

            </Form.Group>


            <Form.Group >
              <Form.Label className='pt-2'>Phone Number</Form.Label>
              <Form.Control required type="text" placeholder="phone number" 
               className={`form-control ${errors.phonenumber ? 'is-invalid' : ''}`}

                onChange={e => setregisterName({ ...registerName, phonenumber: e.target.value })}
              />
               {errors.phonenumber && <div className="invalid-feedback">{errors.phonenumber}</div>}

            </Form.Group>
           

          </Row>

          <div className='text-center'>
            <Button className='mt-4' type='submit' onClick={handleRegister} >REGISTER</Button>
          </div>

          <p className='mt-3 text-center'>Already have an account ? <Link to={'/'}>Login here</Link> </p>

        </Form>
      </div>

    </section>
  )
}

export default Register