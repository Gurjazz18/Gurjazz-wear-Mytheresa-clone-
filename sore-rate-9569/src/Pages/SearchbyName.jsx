import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function SearchbyName({filterData}) {
  const[name,setName]=useState("")

  const hnadleinputData=()=>{
    filterData(name)

  alert("item is available")
     
  }

  return (
    <div className='inputcss' >
        
        <input placeholder='search by name' type="text"
        value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <button  varient="info" onClick={hnadleinputData}>search</button>

   
      
    </div>
  )
}
