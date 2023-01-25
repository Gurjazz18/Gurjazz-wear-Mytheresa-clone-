import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from 'react-router-dom';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
const usenavigate=useNavigate()
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const handlecleck=()=>{
    return usenavigate("/")
  }

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} style={{width:"120%"}} >
          <strong  onClick={()=>handlecleck()}>PLACED THE ORDER</strong>
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
         
          <Toast.Body><strong>Woohoo, YOUR ORDER ID PLACED</strong></Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

export default DismissibleExample;