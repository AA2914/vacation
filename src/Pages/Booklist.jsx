

import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

import image1 from '../IMAGES/suiteroom-1.jpg';
import image2 from '../IMAGES/standardroom-2.jpg';
import image3 from '../IMAGES/familyroom-3.jpg';
import image4 from '../IMAGES/deluxeroom-4.jpg';

const Booklist = () => {
  const { number } = useParams();
  const initialImageNumber = number || 1; // Default to 1 if not provided
  const [selectedImageNumber, setSelectedImageNumber] = useState(initialImageNumber);
  // const navi = useNavigate();

  const books = [
    { image: image1, description: 'Our One Bedroom Suites (72m2) are designed in a resort style, providing the comfort and feel of a resort with teak wood furniture and chic white marble bathroom. A spacious private backyard & terrace with views over the Pagodas.',  description2: 'Facilities & Service', description3: 'Luxurious white marble bathroom with separate shower and bathtub, Soap & bath amenities, Bathrobe & slippers, Hair dryer, Coffee & tea making facilities, Mini-bar, Espresso machine, Telephone, Individually controlled air-conditioning, 32 Inch flat screen TV, Complimentary bottled water, Private terrace with pagoda view, Complimentary WIFI, Complimentary use of hotel bicycle, Daily turn down service, 24 Hour room service'},
    { image: image2, description: 'The Standard Room comprises of 1 Double Bed or 2 Twin Beds, 2 Bedside Tables, a Desk & Chair. The room is furnished with wall to wall carpeting, trendy furnishings and a balcony. Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving and make up mirror as well as all the amenities you could possible need during your stay. A Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are provided on arrival. Electric current: 220 Volts. Smoking rooms & inter-connecting rooms are also available.', description2: 'Facilities & Service', description3:' 1 Double or 2 Single Beds Flat Screen TV, Telephone, Wifi, Individually Controlled A/C & Heating, Electronic Safe Deposit Box, Electronic Lock Key System, Mini Bar, Tea & Coffee Facilities, Iron & Ironing Board , Hairdryer,Balcony' },
    { image: image3, description: 'Free WiFi is available in all rooms. This room will be great option to enjoy your stay with family. Ideal for families of up to 3 persons. Family Rooms feature a king-sized bed and one single bed. Each room is beautifully decorated in modern style and has spacious living area.', description2: 'Facilities & Service', description3:'Air Conditioning Work Desk, Seating Area, Heating, Wardrobe/Closet, Carpeted, Extra Long Beds (> 2 metres), Satellite Channels, Flat-screen TV, Refrigerator, Towels, Sofa bed, Shower, Toilet paper, Hairdryer, Free toiletries, Linen' },
    { image: image4, description: 'Deluxe rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.', description2: 'Facilities & Service', description3:'Free internet Coffee / Tea maker, Soundproof walls, Individually air conditioning system, Smart TV with satellite channels, Electronic safe box, Branded bathroom amenities, Bathrobe and slippers, Hair dryer, Weighting scale, Gym dumbbells, Mini bar, Daily maid services, Hydromassage bathtub' },
    
    // Add more books as needed
  ];

  const selectedBook = books[selectedImageNumber - 1] || books[0]; // Default to the first book if not found

  const handleButtonClick = (newImageNumber) => {
    setSelectedImageNumber(newImageNumber);
  };

 

  return (
    <section style={{ height: '140vh' }} className=" d-flex justify-content-center ">


    <div className='pt-5 '>

      <Card style={{ width: '39rem' ,height:'770px'}} className='text-center'>

      <Card.Img   src={selectedBook.image} alt={`Booked Image ${selectedImageNumber}`} />
      <Card.Body>

        <h5 style={{fontFamily:'Times'}}>{selectedBook.description}</h5>
        <br />
        <h4>{selectedBook.description2}</h4>
        <Card.Text>{selectedBook.description3}</Card.Text>
        <br />
        <Button variant="secondary" href='/bookingform'>Book Now</Button>
      </Card.Body>
      </Card>
   </div>




    </section>
  );
};

export default Booklist;