"use client"

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function (){
    const router = useRouter();
    const session = useSession();
    if(session.status=="unauthenticated"){
        router.push('/api/auth/signin');
        return <>
         <h2 className="text-2xl font-bold">Redirecting to the signin page...</h2>
        </>
    }
    return <>
        
        This is dashboard
    </>
}