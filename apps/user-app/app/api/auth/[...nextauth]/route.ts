import nextAuth from "next-auth"
import { authOption } from "../../../lib/auth"


const handler = nextAuth(authOption);


export {handler as GET, handler as POST}