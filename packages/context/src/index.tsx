"use client"
import React, { createContext } from "react";
import { useContext } from "react";
import {SessionProvider}  from "next-auth/react";


const sessionContext = createContext<any>(null);

export const useSessionContext = () =>{
    return useContext(sessionContext)
}


export const Providers:React.FC<{children:React.ReactNode, session:any}> = ({children, session})=>{
    return <React.Fragment>
        <SessionProvider session={session}>
           <sessionContext.Provider value={session}>
             {children}
           </sessionContext.Provider>
        </SessionProvider>
    </React.Fragment>
    
}

