import React, { useContext } from 'react'

import { KidsData } from '../KidsData'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Example from "./Tooltip";
import { Cartcontext } from "../Context/CartContext";

export default function Kids() {
  const { dispatch } = useContext(Cartcontext);

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
      


     
      
    <Container>
      <Row sm={2}>
        {KidsData.map((elem) => (
          <Col sm={3}>
            <Card>
              <Card.Img
                variant="top"
                src={elem.image}
                width="200px"
                height="300px"
              />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
                  {elem.price}
                  
                </Card.Text>
                <Card.Text>
                {elem.discount}
                 
                </Card.Text>

                <Button
                  onClick={() => dispatch({ type: "addToCard", payload: elem })}
                >
                  <Example />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    
   
  
   
    </>
  )
}
