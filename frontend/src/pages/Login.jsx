import React, { useState } from 'react'

const Login = () => {

  const [state,setState]=useState('Sign Up');

  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[name,setName]=useState('');

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
  }

  return (
    <form className='min-h-[80vh] flex items-center  '>

      <div className=' flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg  '>
        <p className='text-2xl font-semibold'>{state=="Sign Up"?"Create Account":"Login"}</p>
        <p>Please {state=="Sign Up"?"Create Account":"Login"} to book appointment. </p>
        {
          state=="Sign Up"&&
          <div className='w-full mt-4'>
          <p>Full Name:</p>
          <input type='text' className='border border-zinc-300 rounded w-full p-2 mt-1' value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
        }
        
          <div className='w-full mt-2'>
          <p>Email:</p>
          <input type='text' className='border border-zinc-300 rounded w-full p-2 mt-1'  value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>

          <div className='w-full mt-2'>
          <p>Password:</p>
          <input type='text' className='border border-zinc-300 rounded w-full p-2 mt-1' value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          
         
        <button className='bg-primary text-white w-full py-2 rounded-md  text-base mt-4 mb-5 ' onClick={onSubmitHandler}>{state=="Sign Up"?"Create Account":"Login"}</button>
        {
          state=="Sign Up"?
          <p>Already have an account?  <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer '> Login here</span> </p>
          :
          <p>Create an new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer '> Click here</span> </p>
        }
      </div>


    </form>
  )
}

export default Login