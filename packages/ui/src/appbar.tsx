"use client"

import { SessionContextValue, signIn, signOut } from "next-auth/react";


export const Appbar = ({session}:{session:SessionContextValue}) => {
  
  return (
    <div className="w-screen h-[12vh] px-10 flex justify-between items-center border-2">
        <h1 className="text-3xl font-extrabold">ePurse</h1>
        {
          session.status == "authenticated"?(

             <div className="flex gap-3 h-[70%] items-center">
               <button onClick={async ()=>{
                await signOut();
                window.location.href="/"
               }} className="text-white bg-slate-900 p-2 rounded-lg text-xl font-bold px-4"> logout</button>
               <div className="bg-slate-600 w-16 h-16 rounded-full flex justify-center items-center"></div>
             </div>
                 
          ):(
          <button onClick={async ()=>{
            await signIn();
          }} className="text-white bg-slate-900 p-2 rounded-lg text-xl font-bold px-4">login</button>
            
          )
          
        }

       
    </div>
  );
};
