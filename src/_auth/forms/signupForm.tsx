"use client"
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { signupValidation } from "@/lib/validation";
import { z } from 'zod';
import Loader from "@/shared/loader";



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
  function onSubmit(values: z.infer<typeof signupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  let isLoading = true;

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
          name="name"
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
          name="name"
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
          name="name"
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
          {isLoading ? (<div className="flex-center gap-2"><Loader /> Loading....</div>) : 'Sign Up'}
        </Button>
      </form>
    </Form>
  )
}


export default SignupForm
