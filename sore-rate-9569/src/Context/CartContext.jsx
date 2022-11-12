import { createContext, useReducer } from "react";

import Reducer from "./Reducer";

export  const Cartcontext=createContext([])

function CartcontextProvider({children}){

    const[state,dispatch]=useReducer(Reducer,{cart:[],qty:0,price:0})

    return(
      
        <Cartcontext.Provider value={{state,dispatch}} >
            {children}
        </Cartcontext.Provider>

    )
}
export default   CartcontextProvider