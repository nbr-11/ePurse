"use client"
import { Appbar } from "@repo/ui/appbar"
import { SessionContextValue, useSession } from "next-auth/react"

export default function(){
    const session:SessionContextValue = useSession();
    return <>
       <Appbar session={session}/>
       
    </>
}