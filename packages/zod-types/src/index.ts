import zod from "zod";

export const passwordSchema = zod.string()
    .min(8,{"message":"The minimum length must be 8"})
    .regex(/[0-9]/,{message:"The password must contain at least one"})
    .regex(/[a-z]/,{message:"The password must contain at least one smallcase alphabet"})
    .regex(/[A-Z]/,{message:"The password must contain at least one uppercase alphabet"})
    .regex(/[^a-zA-Z0-9]/,{message:"The password must contain at least one special character"})


export const signUpSchema = zod.object({
    email:zod.string().email(),
    password:passwordSchema,
    firstName:zod.string(),
    lastName:zod.string().optional(),
    number:zod.string()
});

export const signInSchema = zod.object({
    email:zod.string().email(),
    password:passwordSchema
})

export type signUpType = zod.infer<typeof signUpSchema>
export type passwordType = zod.infer<typeof passwordSchema>
export type signInType = zod.infer<typeof signInSchema>


