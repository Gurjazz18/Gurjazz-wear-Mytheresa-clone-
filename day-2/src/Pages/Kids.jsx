import React from 'react'

import { KidsData } from '../KidsData'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Kids() {


  return (
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
  )
}
