import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { MenData } from "../MenData";
import ControlledCarousel from "../Components/Carousel";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Example from "./Tooltip";
import { Cartcontext } from "../Context/CartContext";

export default function Men() {
  const { dispatch } = useContext(Cartcontext);

  return (
    <Container>
      <Row sm={2}>
        {MenData.map((elem) => (
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

    
  );
}
