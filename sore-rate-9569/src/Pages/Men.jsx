import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { MenData } from '../MenData';
import ControlledCarousel from "../Components/Carousel"


export default function Men() {

  






  return (

    <>
      <ControlledCarousel/>

      <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5%"}}>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG3/BIG_3_2x_20221107171209.jpg?imwidth=1180&imdensity=2" alt="img" width="600px"/>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG2/DESKTOP_2X_20221107170819.jpg?imwidth=1180&imdensity=2" alt="img" width="600px"/>

        
      </div>
  
         
     <div className='menspart' >

          


             
{
  MenData.map((elem)=>(
      
       
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
     </>
  )
}
