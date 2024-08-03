"use client"
import { useForm } from "react-hook-form";

interface FieldValue{
  firstName:string,
  lastName?:string,
  email:string,
  password:string
}

export const SignupForm = () => {
  const {register,setError, formState:{errors, isSubmitting}} = useForm<FieldValue>();
  return (
    <div className="rounded-lg shadow-2xl">
      
      <form action="" className="flex flex-col gap-4 bg-white p-4 w-[20rem] rounded-lg">
        <h2 className="text-center text-3xl font-bold">Signup</h2>
       
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
        <input {...register("firstName")} type="text" id="firstName" className="border-2 rounded-lg p-2" placeholder="john"/>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} type="text" id="lastName" className="border-2 rounded-lg p-2" placeholder="doe"/>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input {...register("email")} type="text" id="email" className="border-2 rounded-lg p-2" placeholder="johndoe@example.com"/>
        </div>
        
        <div className="flex flex-col">
        <label htmlFor="password">password</label>
        <input {...register("password")} type="password" id="password" className="border-2 rounded-lg p-2" placeholder="password"/>
        </div>
        

        <button type="submit" className="bg-slate-900 p-2 rounded-lg text-white font-bold text-xl">submit</button>
      </form>
     
    </div>
  );
};
