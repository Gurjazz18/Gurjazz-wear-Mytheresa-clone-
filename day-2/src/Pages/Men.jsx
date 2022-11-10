import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export default function Men() {


    useEffect(()=>{
          fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => console.log(json));
    },[])






  return (
     <div>
        <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0e/P00734009.jpg"/>
      <Card.Body>
        <Card.Title>GABRIELA HEARST</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>€ 379</ListGroup.Item>
        
        
      </ListGroup>

      <Button variant="primary">Add To Cart</Button>
     
     </Card>
     </div>
  )
}
