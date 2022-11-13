import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';
import Footer from './Footer';




export default function Accessries() {
  const[data,setData]=useState([])

  
 
  


  useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
          .then((res) => res.json()).then((res)=>{
            setData(res.products)

            console.log(res.products)
          
          })
          
         
        
  },[])


  



return (

  <>

     <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"5%"}}>
        <img src ="https://th.bing.com/th/id/R.31faa348af8ac253a3b7e029eae3a644?rik=%2bTRwrZcUm4b5ag&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1523206489230-c012c64b2b48%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8cGhvbmV8fDB8fHx8MTYzMTc3MTM5Mw%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=DpUcs0k9e9NJWRpnO2OJpRGpicdchH9tAz%2fxBc0YRZ4%3d&risl=&pid=ImgRaw&r=0" width="600px" />
        <img src ="https://techbeauty.in/wp-content/uploads/2021/02/71N33GFefL._SL1500_-1024x1024.jpg"  width="600px"  />

        
      </div>
       
   <div className='menspart' >

        


           
         {
             data && data?.map((elem)=>(
             
              
          <Card key={elem.id}>
         
          <Card.Img variant="top" src={elem.images[0]}/>
     
          <Card.Body>
            <Card.Title></Card.Title>
              <Card.Title>{elem.title}</Card.Title>

          </Card.Body>
                <ListGroup className="list-group-flush">
               
               
                <ListGroup.Item>{elem.category}</ListGroup.Item>
                <ListGroup.Item>{elem.price}</ListGroup.Item>

               


              </ListGroup>

              <Button variant="primary">Add To Cart</Button>

              
            </Card>

          


             ))
          }
      
       

     
       
      


   </div>

    <div style={{marginTop:"320%"}}>
    <Footer/>
    </div>

   </>
)
}

