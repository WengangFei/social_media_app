"use client"
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { signupValidation } from "@/lib/validation";
import { z } from 'zod';
import Loader from "@/shared/loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";







function SignupForm() {
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      name: "",
      username: '',
      email: '',
      password: ''
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupValidation>) {
    const newUser = await createUserAccount(values);
    console.log(newUser)
  }

  let isLoading = false;

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src='/assets/images/logo.svg' alt='signUp-logo'/>
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new Account</h2>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-center flex-col gap-5 w-full mt-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" {...field} />
              </FormControl>  
              
              <FormMessage /> 
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" {...field} />
              </FormControl>  
              
              <FormMessage /> 
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" {...field} />
              </FormControl>  
              
              <FormMessage /> 
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='text' className="shad-input" {...field} />
              </FormControl>  
              
              <FormMessage /> 
            </FormItem>
          )}
        />

        <Button className='shad-button_primary' type="submit">
          {isLoading ? 
          (<div className="flex-center gap-2"><Loader /> Loading....</div>) 
          : 'Sign Up'}
        </Button>

        <p>
          Already have an account? 
          <Link to='/sign-in' className="ml-4 text-primary-500 font-bold text-xl">
            Log In
          </Link>
        </p>
      </form>
    </Form>
  )
}


export default SignupForm
