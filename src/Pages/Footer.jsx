import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosHeart } from "react-icons/io";

function Footer() {
  return (
   <>

    <footer class="footer" style={{backgroundColor:' rgb(39, 39, 39)'}} className='pt-5'>
     
			<div class="container" >
				<div class="row">
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading text-light">Vacation Rental</h2>
						<p style={{color:'grey'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
					</div>
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading text-light">Services</h2>
						<ul class="list-unstyled">
              <li><a href="about" style={{textDecoration:'none',color:'grey'}}>Map Direction</a></li>
              <li><a href="about" style={{textDecoration:'none',color:'grey'}}>Accomodation Services</a></li>
              <li><a href="about" style={{textDecoration:'none',color:'grey'}}>Great Experience</a></li>
              <li><a href="about" style={{textDecoration:'none',color:'grey'}}>Perfect central location</a></li>
            </ul>
					</div>
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 class="footer-heading text-light">Tag cloud</h2>
						<div class="tagcloud">
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>APARTMENT</a></Button>{' '}
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>VACATION</a></Button>{' '}
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>RENTAL</a></Button>{' '}
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>RENT</a></Button>{' '}
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>HOUSE</a></Button>{' '}
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>PLACE</a></Button>{' '}
            <Button variant="outline-secondary"><a  style={{textDecoration:'none',color:'white',fontSize:'12px'}}>DRINKS</a></Button>{' '}
	           
             
	          </div>
					</div>
					<div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                  
                 
            <h2 class="footer-heading  text-light">Follow us</h2>
            <Button variant="secondary"><FaTwitterSquare /></Button>{' '}
            <Button variant="secondary"><FaFacebookF /></Button>{' '}
            <Button variant="secondary"><GrInstagram /></Button>{' '}

          </div>
				</div>
			</div>

			<div class="w-100 mt-5 border-top py-5" style={{backgroundColor:'black'}}>
				<div class="container">
					<div class="row">
	          <div class="col-md-6 col-lg-8">

	            <p class="copyright mb-0" style={{color:'grey',fontWeight:600}}>
	  Copyright ©2024 All rights reserved | This template is made with <IoIosHeart /> by <a  target="_blank" style={{textDecoration:'none',color:'white'}}>Vacation Rental.com</a>
	  </p>
	          </div>
	          <div class="col-md-6 col-lg-4 text-md-right" >
	          	<p style={{fontWeight:600}}>
	          		<a class="mr-md-3 ps-5"  style={{textDecoration:'none',color:'grey'}}>Terms</a> 	<a class="mr-md-3 ps-5"  style={{textDecoration:'none',color:'grey'}}>Privacy</a> <a class="mr-md-3 ps-5"  style={{textDecoration:'none',color:'grey'}}>Compliances</a>
	          	
	          		
	          	</p>
	          </div>
	        </div>
				</div>
			</div>
     
		</footer>


    </>
  )
}

export default Footer