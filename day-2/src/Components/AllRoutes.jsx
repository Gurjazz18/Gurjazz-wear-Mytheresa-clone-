import React from 'react'
import {
   
    Routes,
    Route,
  } from "react-router-dom";

  import Men from "../Pages/Men"
  import Women from '../Pages/Women';
  import Login from '../Pages/Login';
  import Cart from '../Pages/Cart';
  import Kids from '../Pages/Kids';
  import Life from '../Pages/Life';

 export default function AllRoutes() {

  return (
    <Routes>
  
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/life" element={<Life />} />
         
  
          
      
     
    </Routes>
  )
}


