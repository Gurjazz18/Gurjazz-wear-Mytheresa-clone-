import React, { useContext, useState } from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

  import {Cartcontext} from "../Context/CartContext"


import  {Data}  from "../Data"
import SearchbyName from './SearchbyName';
import ControlledCarousel from "../Components/Carousel"




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


      <div  >

        

          <ControlledCarousel/>
        



         <div  style={{marginTop:"20px"}}>
         <SearchbyName  filterData={filterData}/>
         </div>


        <div  className='menspart'>
    
        {
         data&&data?.map((elem)=>(
               
                
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
