import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import Singlepage from './Singlepage';

export default function Accessries() {
  const[data,setData]=useState([])


  useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
          .then((res) => res.json()).then((res)=>{
            setData(res.products)
          
          })
          
         
        
  },[])






return (
       
   <div className='menspart' >

        


           
         {
             data?.map((elem)=>(
             
              
          <Card key={elem.id}>
         
          <Card.Img variant="top" src={elem.images[0]}/>
     
          <Card.Body>
            <Card.Title></Card.Title>
              <Card.Title>{elem.title}</Card.Title>

          </Card.Body>
                <ListGroup className="list-group-flush">
                <Link  to={`/acc/${elem.id}`}> know more</Link>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>{elem.category}</ListGroup.Item>
                <ListGroup.Item>{elem.price}</ListGroup.Item>


              </ListGroup>

              <Button variant="primary">Add To Cart</Button>

              
            </Card>

          


             ))
          }
      
       

     
       
      


   </div>
)
}

