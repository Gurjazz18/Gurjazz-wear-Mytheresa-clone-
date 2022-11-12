import React from 'react'

export default function Reducer(state,action) {

    const{cart,qty,price}=state
      switch (action.type) {
        case "addToCard":
            
                return{
                
                    ...state,
                  cart:[...state.cart,action.payload],
                  qty:qty+1,
                  price:price+action.payload.offerPrice
                  
                 }
            

          
       
        
            
         
        default:
            return{
                state
            }
      }
}
