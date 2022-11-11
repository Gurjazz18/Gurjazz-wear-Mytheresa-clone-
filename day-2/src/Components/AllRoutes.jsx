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
  import Accessries from '../Pages/Accessries';
import Home from '../Pages/Home';


 export default function AllRoutes() {

  return (
    <Routes>

            <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/acc" element={<Accessries />} />
         
          <Route path="/bag" element={<Cart />} />
         
  
          
      
     
    </Routes>
  )
}


