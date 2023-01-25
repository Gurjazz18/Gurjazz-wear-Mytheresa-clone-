import React, { useContext, useState } from 'react'
import Alert from 'react-bootstrap/Alert';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

  import {Cartcontext} from "../Context/CartContext"
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';


import  {Data}  from "../Data"
import SearchbyName from './SearchbyName';
import ControlledCarousel from "../Components/Carousel"

  import Footer from './Footer';
import Example from './Tooltip';





export default function Home() {

  const{dispatch}=useContext(Cartcontext)

  const[data,setData]=useState([])


  const filterData=(name)=>{

    const item=Data.filter((el)=>(
      el.name===name
    ))
   
   setData(item)

  }

  console.log(data)

  if(data.length===0){

    setData(Data)
  }

   

  return (


    <Container >

    <Row>
    {
        data.map((elem)=>(

        <Col sm={3}>
        <Card>
          <Card.Img variant="top" src={elem.image} width="200px" height="300px"/>
        <Card.Body>
          <Card.Title>{elem.name}</Card.Title>
         <Card.Text>
         {elem.offerPrice}
         {elem.rating}
           </Card.Text>
           <Button onClick={()=>dispatch({type:"addToCard",payload:elem})}>
            ADD TO CARD
           </Button>
            
            
           
          
           </Card.Body>
          </Card>
        </Col>
          
        ))
      }

    </Row>
    
     
  </Container>


  )
}
