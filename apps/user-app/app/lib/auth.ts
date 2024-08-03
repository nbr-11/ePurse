import { AuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export const authOption:AuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                email:{label:"email", placeholder:"johndoe@example.com",type:"text"},
                password:{label:"password",placeholder:"password",type:"password"}
            },
            async authorize(credentials, req) {
                return {
                    id:"1",
                    name:'Nishant'
                }
            },
        })
    ],
    secret:  process.env.NEXTAUTH_SECRET,
    
}