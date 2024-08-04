import { AuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

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
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            
        })
    ],
    secret:  process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn(params) {
            
            return true
        },

        async jwt(params) {
            return params.token
        },

        async session(params){
            return params.session
        }
    }
    
}