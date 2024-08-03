"use client"
import {useSessionContext} from "@repo/context/provider"

export const Appbar = () => {
  const session = useSessionContext();
  return (
    <div className="w-screen h-[12vh]  bg-white px-10 flex justify-between items-center border-2">
        <h1 className="text-3xl font-extrabold text-black">ePurse</h1>
        {
          session?.status == "authenticated"?(
            <button className="text-xl font-bold text-white bg-slate-900 p-2 rounded-lg">
            Login
        </button>
          ):(
            <button className="text-xl font-bold text-white bg-slate-900 p-2 rounded-lg">
              Logout
            </button>
          )

}
        
    </div>
  );
};
