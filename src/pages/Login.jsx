import React, {useState} from 'react';
const Login = () => {
  const [state ,setState] = useState("Sign Up");
  const [email, setEmail] = useState('');
  const [passward,setPassward]= useState('');
  const [name ,setName]= useState('');
  const onSubmitHandler = async (event)=>{
       event.preventDefault();
      
  }
  return (
    <form className='min-h-[80vh] flex items-center '>
        <div className='flex flex-col gap-3 m-auto min-w-[340px] sm:min-w-96 border' >
          <p className='text-2xl font-semibold'>{state === 'Sign Up'?"Create Account" :"Login"}</p>
          <p >Please {state === 'Sign Up'?"Create Account" :"log in"} to book appointment</p>
        {
          state == 'Sign Up' &&<div className='w-full ' >
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </div>
        }
        
        <div className='w-full '>
          <p>Email</p>
          <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={name} />
        </div>
        <div className='w-full' >
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="pasward" onChange={(e)=>setPassward(e.target.value)} value={name} />
        </div>
         <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up'?"Create Account" :"log in"}</button>
         {
          state === 'Sign Up'? <p>Already have an Account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer '>login here</span></p>
          : <p>Create a new Account?<span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer '>click here</span></p>
         }
         </div>
    </form>
  )
}

export default Login