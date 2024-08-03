import { PrismaClient } from "@prisma/client";


declare global {
    var prisma: undefined | ReturnType<typeof prismaSingletonClient>
} 

const prismaSingletonClient = ()=>{
    return new PrismaClient();
}

const prisma = globalThis.prisma ?? prismaSingletonClient();


export default prisma;

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;


