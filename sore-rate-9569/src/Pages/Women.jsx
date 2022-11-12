
import { useEffect ,useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import ControlledCarousel from "../Components/Carousel"

import {WomenData}  from "../WomenData"

export default function Women() {
 


  






return (

<>
       <ControlledCarousel/>

       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5%"}}>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Actbox_Tall_Small_2x_20221107113119.jpg?imwidth=600&imdensity=2" width="600px"/>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxTall-SKIEDIT_2x_20221107113331.jpg?imwidth=600&imdensity=2"  width="600px"/>

        
      </div>
       
  <div className='menspart' >

         
              
           
                          
   

            

         

          


             
  {
    WomenData.map((elem)=>(
      
       
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
</>
)
}


