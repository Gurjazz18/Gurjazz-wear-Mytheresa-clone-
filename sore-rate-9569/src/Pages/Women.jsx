import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";

import ControlledCarousel from "../Components/Carousel";
import { Cartcontext } from "../Context/CartContext";

import { WomenData } from "../WomenData";
import { AiFillCaretRight } from "react-icons/ai";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Footer from "./Footer";
import Example from "./Tooltip";

const slidingData = [
  {
    imag: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_2_20221107113403.jpg",
  },
  {
    imag: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x__20221107113403.jpg",
  },
  {
    imag: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_3_20221107113404.jpg",
  },
  {
    imag: "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a9/P00584614.jpg",
  },
  {
    imag: "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/58/P00667532.jpg",
  },
  {
    imag: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0f/P00741193.jpg",
  },
  {
    imag: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/19/P00746088.jpg",
  },
  {
    imag: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00705914_b1.jpg",
  },
  {
    imag: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_4_20221107113403.jpg",
  },
  {
    imag: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00746274_b1.jpg",
  },
  {
    imag: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4b/P00707926_b1.jpg",
  },
];

export default function Women() {
  const { dispatch } = useContext(Cartcontext);

  return (
    <Container>
      <Row sm={2}>
        {WomenData.map((elem) => (
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
