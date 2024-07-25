import React, { useState } from 'react'
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Button, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

  const [loginName, setloginName] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = (event) => {
      event.preventDefault();

      let tempErrors = {};
      let isValid = true;

      if (!loginName.email) {
          tempErrors["email"] = "Email is required";
          isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(loginName.email)) {
          tempErrors["email"] = "Email is not valid";
          isValid = false;
      }

      if (!loginName.password) {
          tempErrors["password"] = "Password is required";
          isValid = false;
      }

      if (isValid) {
          axios.get('http://localhost:8000/Register', {
              params: {
                  email: loginName.email,
                  password: loginName.password
              }
          })
          .then(response => {
              const user = response.data.find(user => user.email === loginName.email && user.password === loginName.password);
              if (user) {
                  console.log("Login successful");
                 
                  navigate(`/home`); // Change to the route you want to navigate to on success
              } else {
                  setErrors({ login: 'Invalid email or password' });
              }
          })
          .catch(err => {
              console.error(err);
              setErrors({ login: 'Invalid email or password' });
          });
      } else {
          setErrors(tempErrors);
      }
  };


  return (

    <section id='login' style={{ height: '100vh' }} className=" d-flex justify-content-center align-items-center">
      <div  >

        <Form  onSubmit={handleLogin} style={{ border: '1px solid white', width: "510px" }} className=' ps-5 pe-5'>

          <h1 className='text-center  pt-3 pb-3' style={{ fontStyle: "italic", color: 'hotpink' }}> Login Page </h1>

          <Row >

            <Form.Group >
              <Form.Label style={{ color: 'black' }}>Email</Form.Label>
              <Form.Control required type="email" placeholder="mail"
               className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={e => setloginName({ ...loginName, email: e.target.value })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}

            </Form.Group>

            <Form.Group >
              <Form.Label className='mt-3' style={{ color: 'black' }}>Password</Form.Label>
              <Form.Control required type="password" placeholder="password" 
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                onChange={e => setloginName({ ...loginName, password: e.target.value })}
              />
              
               {errors.password && <div className="invalid-feedback">{errors.password}</div>}
               {errors.login && <div className="text-danger">{errors.login}</div>}

            </Form.Group>

          </Row>

          <div className='text-center pt-5 pb-3'>
            <Button type='submit' style={{ backgroundColor: 'hotpink', border: 'hotpink', padding: '10px 50px 10px 50px' }} onClick={handleLogin} > LOGIN </Button>
          </div>

          <p className='mt-2 text-center' style={{ color: 'black' }}>Do not have account ? <Link to={'/register'} style={{ color: ' rgb(214, 22, 118)' }}>Register</Link> </p>


        </Form>

      </div>
    </section>
  )
}

export default Login