import React, { useContext } from 'react'



import {Cartcontext} from "../Context/CartContext"
import Stack from 'react-bootstrap/Stack';


export default function Cart() {

  const {state}=useContext(Cartcontext)
  
  const{cart,qty,price}=state

 
      


  
  return ( 


    <>

    
    
  
   
       

     <div  className='TableCss'>

    

     {
     
        cart.length>0?(
          cart.map((el)=>(
            <div style={{display:"flex",flexDirection:"column",textAlign:"center",border:"1px solid red"}}> 
            <img src={el.image[0]}  width="250px"/>
              <p>{el.offerPrice}</p>
              <p>{el.name}</p>
         
             </div>

          ))
         

        ):"You Card is Empty!"


     }
       
     </div>
    

      <div  className='qty12'>
       <h1>  Total Price:{price}</h1>
       <h1>  Total Quantity:{qty}</h1>
      
      </div>

     </>
  )
}

