import React  from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Contact from '../Pages/Contact';
import Apartment from '../Pages/Apartment';
import { Link } from 'react-router-dom';
import Footer from './Footer';


  function Home() {



  return (
    <>
   <Navbar/>

<section id='home'>
<Container>
      <Row xs={1} md={2} >
        <Col xs={12} md={8} >
        <p style={{color:'white',fontSize:'22px',paddingTop:'180px'}}>Welcome to Vacation Rental</p>
        <h2 style={{color:'grey',fontSize:'70px',fontFamily:' "Playfair Display", serif',fontWeight:'bold',letterSpacing:'2px'}}>Rent an appartment for your vacation</h2>


       <Link to='/contact'> <Button  size='lg' style={{ background: '#fd7792',color:"black", border:'0px',fontSize:'13px',height:'45px',width:'150px',letterSpacing:'2px'}} active>
         CONTACT US
        </Button> </Link>
       

        </Col>
        
      </Row>

</Container>


  </section>

<section>
  <Container>
    <h1 style={{fontFamily:'"Gilda Display", serif',fontSize:'35px'}} className='text-center pt-5 pb-5'>Surrounded by gallaries, boutiques, restaurants <br /> and cafe's, our Hotel is a hub of energy and <br /> style.</h1>
    <Row xs={1} md={2} className='pb-5 ' >
          <Col  >
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/project-img.jpg.webp" alt=""/>

          </Col>

          <Col style={{border:'1px solid',backgroundColor:'black'}} >
               <h1 style={{fontFamily:'"Gilda Display", serif',fontSize:'35px',color:'white'}} className='pt-5 text-center'>Take advantage of our seasonal specials.</h1>
               <h5 className='pt-5 pb-5 text-center' style={{lineHeight:'35px',color:'white',fontWeight:'370'}}>The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite.</h5>
            <div className='text-center'>
              <Button style={{border:"1px solid #E29C89",backgroundColor:'black',color:"#E29C89"}} >View Project</Button>
            </div>
          </Col>
      </Row>
  </Container>
</section>

<Apartment/>

<section id='demo' style={{border:'0px',backgroundColor:'#fd7792'}}  className='justify-content-center'>


<div  className='p-4 m-3 mt-5 mb-5'>
  <h1 style={{color:'white'}}>38900</h1>
  <h6 style={{color:'white'}}>#of Happy Guests</h6>
</div>

<div className='p-4 m-3 mt-5 mb-5'>
  <h1 style={{color:'white'}}>320</h1>
  <h6 style={{color:'white'}}>#of Room</h6>
</div>

<div className='p-4 m-3 mt-5 mb-5'>
  <h1 style={{color:'white'}}>1000</h1>
  <h6 style={{color:'white'}}>#of Staffs</h6>
</div>

<div className='p-4 m-3 mt-5 mb-5'>
  <h1 style={{color:'white'}}>587</h1>
  <h6 style={{color:'white'}}>#of Destination</h6>
</div>


</section>


<Contact/>
<Footer/>

    </>
  )
  }

export default Home









