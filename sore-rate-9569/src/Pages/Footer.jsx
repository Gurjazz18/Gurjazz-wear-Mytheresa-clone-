

import React from 'react'

import { BsFillSuitHeartFill,BsFacebook,BsLinkedin,BsYoutube,BsInstagram,  BsTwitter, BsMailbox, BsMessenger} from "react-icons/bs";

export default function Footer() {

  return (


    <>

    
      
   
       
      
   

     <div className='footercss'>

      
   
   
      <div>
      <h5>SERVICE & SECURITY</h5>
      <h5>Fast delivery</h5>
          
      <p>Delivery within 2 business days</p>
      <h5>Free returns within 30 days</h5>
      <p>Convenient return service</p>
      <h5>Secure payment and data protection</h5>
      <p>SSL encryption for secure transactions and personal data</p>
      </div>

      <div>
      <h5>MYTHERESA</h5>
      <h5>About us</h5>
      <p>Trust & services</p>
      <p>Sustainability</p>
      <p>Press</p>
      <p>Careers</p>
      <p>Investor Relations</p>
      <p>Affiliates</p>
      <p>Tex_Free Shopping</p>
      </div>


      <div>
      <h5>CUSTOMER CARE</h5>
      <p>Contact us</p>
          
      <p>Shopping information</p>
      <p>Secure payment</p>
      <p>Exchanges</p>
      <p>Returns</p>
      <p>After sales services</p>
      <p>Gift card</p>
      </div>
      
      <div>
      <h5>GET TREND UPDATES, STYLE TIPS AND MORE</h5>
      <p><input placeholder='
your email address here…
'/>  <button>SIGN UP</button></p>
          
      
      <p>Wish list <BsFillSuitHeartFill/>
               </p>
<p>Receive personal notifications</p>

<p>  

         
Follow us on
      </p>

      <p style={{display:"flex",gap:"20px"}}>
        <BsFacebook/>
        <BsLinkedin/>
        <BsYoutube/>
        <BsInstagram/>
        <BsTwitter/>
        <BsMailbox/>
        <BsMessenger/>
       
      </p>
      </div>

      
     




    </div>

    <hr/>

      <div style={{fontSize:"15px",color:"grey",marginLeft:"20px",  fontStyle:"italic",display:"flex"}}>
          <h4>
              payment methods:<img src="./payments.jpeg" alt="img"/>
         </h4>

      </div>

    </>


  )
}
