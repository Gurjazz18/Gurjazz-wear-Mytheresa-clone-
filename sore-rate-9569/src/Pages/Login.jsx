import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Login() {

  const navigate=useNavigate()

  const{authState, loginUser,logoutUser}=useContext(AuthContext)

  const[loginDetails,setLoginDetails]=useState({
    email:"",
    password:""
  })

  const handleLogin=(e)=>{

    const{name,value}=e.target

    setLoginDetails({...loginDetails,[name]:value})

  }


  console.log(loginDetails)

  const handleSubmit=(e)=>{

    e.preventDefault()

    axios({
      method:"POST",
      url:`https://reqres.in/api/login`,
      data:loginDetails

  
    }).then((res)=>{
      console.log(res.data.token)

      loginUser(res.data.token)
    

    })
    
  }

  console.log(authState)

  if(authState.isAuth){
    navigate("/bag")
  }


const {email,password}=loginDetails
  return (
    <div  className='Loginpagecss'>
   <Form   onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleLogin} name="email" value={email}  autoComplete="off"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        onChange={handleLogin} name="password" value={password}  autoComplete="off" />
      </Form.Group>
      
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
      
    </div>
  )
}
