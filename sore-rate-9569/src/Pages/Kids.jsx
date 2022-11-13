import React from 'react'

import { KidsData } from '../KidsData'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Kids() {

  const navigate=useNavigate()

  const handleClick=()=>{

      navigate("/bag")

  }


  return (

    <>
      
      <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5%"}}>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/CW44_PB_Skiwear_Image_20221108081623.jpg" width="600px"/>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW43/Kids_Homepage_Festive_Boys_Desktop_2x_20221021105854.jpg?imwidth=1180&imdensity=2"  width="600px"/>

        
      </div>

      <div style={{marginTop:"20px",position:"relative"}}>
        <img src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_November/Homepage_Kids_BabyBanner_desktop_2x_20221103093127.jpg?imwidth=1180&imdensity=2"  width="100%"/>

        <div  style={{ position:"absolute",top:"45px",right:"45%"}}>
        <h1>BaBy</h1>

        <Button variant="dark" size="mg"  onClick={handleClick}>Shop Now</Button>
        </div>

       
      </div>
      <div>
        <img src="./kid.jpeg"  alt="img"  width="100%"/>
    </div>


     
      

    <div  className='menspart'>
     {
      KidsData.map((elem)=>(
      
       
   <Card key={elem.id}>
  
   <Card.Img variant="top" src={elem.image}/>

   <Card.Body>
       <Card.Title>{elem.title}</Card.Title>

   </Card.Body>
         <ListGroup className="list-group-flush">
         
         <ListGroup.Item>{elem.price}</ListGroup.Item>
         <ListGroup.Item>{elem.discount}</ListGroup.Item>


       </ListGroup>

       <Button variant="primary">Add To Cart</Button>

     </Card>


      ))
   }



      
    </div>
    
    
   
  <Footer/>
   
    </>
  )
}
