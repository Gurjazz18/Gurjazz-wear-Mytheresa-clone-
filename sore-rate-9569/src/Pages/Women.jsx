
import { useEffect ,useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import ControlledCarousel from "../Components/Carousel"

import {WomenData}  from "../WomenData"
import { AiFillCaretRight } from "react-icons/ai";
import { BsArrowRightShort,BsArrowLeftShort } from 'react-icons/bs';
import Footer from './Footer';

const slidingData=[
 {
  imag:"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_2_20221107113403.jpg"
 },
 {
  imag:"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x__20221107113403.jpg"
 },
 {
  imag:"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_3_20221107113404.jpg"
 },
 {
  imag:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a9/P00584614.jpg"
 },
 {
  imag:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/58/P00667532.jpg"
 },
 {
  imag:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0f/P00741193.jpg"
 },
 {
  imag:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/19/P00746088.jpg"
 },
 {
  imag:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00705914_b1.jpg"
 },
 {
  imag:"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_4_20221107113403.jpg"
 },
 {
  imag:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00746274_b1.jpg"
 },
 {
  imag:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4b/P00707926_b1.jpg"
 },
 

]

export default function Women() {

  let box=document.querySelector(".slidercss")

     const handleslideLeft=()=>{

      let width=box.clientWidth
      console.log(width)
      box.scrollLeft= box.scrollLeft-width


   }
 

   

 

    const handleslideRight=()=>{


      let width=box.clientWidth
      console.log(width)
      box.scrollLeft= box.scrollLeft+width


    }
 


  






return (

<>
       <ControlledCarousel/>

       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5%"}}>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Actbox_Tall_Small_2x_20221107113119.jpg?imwidth=600&imdensity=2" width="600px"/>
        <img src ="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxTall-SKIEDIT_2x_20221107113331.jpg?imwidth=600&imdensity=2"  width="600px"/>

        
      </div>
          <div style={{textAlign:"center",marginTop:"20px"}}>

            <h3>IT'S A MATCH</h3>
          <h1>Cozy textures and warm tones</h1>
          </div>



     

  
    
     
     <div  className='wrappercss' >
    

     <BsArrowLeftShort onClick={handleslideLeft}  direction="left"    className='arrow' id='arrLeft'/>

     <div  className='slidercss'   >
    
     

     {
      slidingData.map((elem)=>(
        <img src={elem.imag}   alt="img"  />
      ))
     }

      
    

        </div>
        <BsArrowRightShort  onClick={handleslideRight}   className='arrow'  id="arrRight"/>
 
      
       
     </div>



      <div style={{textAlign:"center",marginTop:"20px"}}>

        <Button variant="dark">Shop Now <AiFillCaretRight/></Button>
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

<Footer/>
</>
)
}


