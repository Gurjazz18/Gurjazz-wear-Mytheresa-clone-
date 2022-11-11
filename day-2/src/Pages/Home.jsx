import React, { useContext, useState } from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

  import {Cartcontext} from "../Context/CartContext"


import  {Data}  from "../Data"




export default function Home() {

  const{dispatch}=useContext(Cartcontext)


  

  


   

  return (


      <div  >

        

          
        



          


        <div  className='menspart'>
    
        {
            Data&&Data?.map((elem)=>(
               
                
            <Card >
           
            <Card.Img variant="top" src={elem.image}/>
       
            <Card.Body>
                <Card.Title>{elem.name}</Card.Title>

            </Card.Body>

                  <ListGroup className="list-group-flush">

                  <ListGroup.Item>{elem.name}</ListGroup.Item>
                  <ListGroup.Item>{elem.offerPrice}</ListGroup.Item>
                  <ListGroup.Item>{elem.rating}</ListGroup.Item>

                  
              


                </ListGroup>


                <Button variant="info"   onClick={()=>dispatch({type:"addToCard",payload:elem})}   >Add To Cart</Button>

              </Card>
  

               ))
            }
           
        </div>
      
         
         

     

       
         
    


     </div>
  )
}
