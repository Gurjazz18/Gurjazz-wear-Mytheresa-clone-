import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'



import {Cartcontext} from "../Context/CartContext"

import { AuthContext } from '../Context/AuthContext'



export default function Cart() {
  const{authState, loginUser,logoutUser}=useContext(AuthContext)

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

       <div  style={{width:"13%",margin:"auto",marginTop:"20px"}}>
       <Button onClick={()=>logoutUser()} size="lg"  variant='info'>Go back</Button>
       </div>

     </>
  )
}

