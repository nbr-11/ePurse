import { AuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";
import {signInSchema} from "@repo/zod-types"

export const authOption:AuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                email:{label:"email", placeholder:"johndoe@example.com",type:"text"},
                password:{label:"password",placeholder:"password",type:"password"}
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;
                
                //do zod validation if fails return null

                const {success} = signInSchema.safeParse({email, password})
                if(!success){
                    return null;
                }

                //check if the user exists in the database

                const userInDb = await prisma.user.findUnique({ 
                    where:{
                        email:email
                    },
                    select:{
                        id: true,
                        email: true,
                        password: true,
                        firstName: true,
                        lastName: true,
                    }
                });

                //it means user does not exists
                if(!userInDb){
                    return null;
                }


                // check if the password is same

                const isPasswordCorrect = await bcrypt.compare(password as string, userInDb?.password as string)

                if(!isPasswordCorrect){
                    return null;
                }

                return {
                    id:userInDb?.id,
                    firstName:userInDb.firstName,
                    email:userInDb.email,
                    lastName:userInDb.lastName || "",
                };
                
            }
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
            params.token.id = params.token.sub
            return params.token
        },

        async session(params){
            
            if(!params.session.user){
                return params.session
            }

            return {
                expires:params.session.expires,
                user:{
                    ...params.session.user,
                    id:params.token.sub
                }
            }
        }
    }
    
}