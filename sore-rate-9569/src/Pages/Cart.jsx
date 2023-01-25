import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'

import Table from 'react-bootstrap/Table';

import {Cartcontext} from "../Context/CartContext"

import { AuthContext } from '../Context/AuthContext'
import DismissibleExample from './Toast';



export default function Cart() {
  const{authState, loginUser,logoutUser}=useContext(AuthContext)

  const {state}=useContext(Cartcontext)
  
  let{cart,qty,price}=state


  
  return ( 
    <div style={{display:"flex",gap:"210px",marginTop:"60px"}}>
      <Table style={{width:"70%",border:"1px solid black"}} >
      <thead>
        <tr>
          <th>Image</th>
        
          <th>Price</th>
          <th>Name</th>
        
          
        </tr>
      </thead>
      <tbody>

     

        {
     
          cart.length>0&&
          cart.map((el)=>(
         <tr > 
         <td><img src={el.image[0]}  width="100px"/></td>
         
           <td>{el.offerPrice}</td>
           <td>{el.name}</td>
          
      
          </tr>

       ))
      

     


  }
       
       </tbody>
     </Table>
    

    <div style={{width:"30%"}}>
    <div>
      <h1>Total price</h1>
      <h1>{price}</h1>
    </div>
      
    <DismissibleExample/>

    </div>

     </div>

  )
}

