import React, { useState } from 'react'
import axios from 'axios';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { IoMdSend } from 'react-icons/io';

function Contact() {

	
	const [contact, setContact] = useState({
    name:'',
		email: '',
    message:''
		
	  })

	  const handleContact=(event)=>{
		event.preventDefault();
		axios.post('http://localhost:8000/Contact',contact)
        document.getElementById('form').reset()
	  }

  return (
    <>
    <div style={{height:'500px'}} >
    <h1 className='text-center pt-3 ' style={{fontFamily:'"Gilda Display", serif'}}>Contact</h1>

    <Container  className=' d-flex justify-content-center align-items-center'>
      


    <Form id='form' style={{width:'400px',backgroundColor:' rgb(221, 220, 211)'}} className=' p-5 '>

<h4 className='text-center ' style={{fontFamily:'"Gilda Display", serif'}}>Contact Us</h4>

<InputGroup className='pt-3 pb-2'>
<Form.Control  placeholder="Name"  aria-label="Recipient's username"  aria-describedby="basic-addon2" name='name'  onChange={e=>setContact({...contact,name:e.target.value})}/>
</InputGroup>


<InputGroup className='pt-3 pb-2'>
<Form.Control  placeholder="Email" type='email'  aria-label="Recipient's username"  aria-describedby="basic-addon2" name='email'  onChange={e=>setContact({...contact,email:e.target.value})}/>
</InputGroup>


<InputGroup className='pt-3 pb-2'>
<Form.Control
  placeholder="Message" as="textarea"  aria-label="Recipient's username"  aria-describedby="basic-addon2" name='message' onChange={e=>setContact({...contact,message:e.target.value})} />
</InputGroup>

<div className='text-center mt-3'>
<Button type='submit' style={{backgroundColor:'#fd7792',borderColor:'#fd7792'}} onClick={handleContact}>Send</Button>
</div>


</Form>
    </Container>
   </div>
   </>
  )
}

export default Contact