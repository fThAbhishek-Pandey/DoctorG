import React, {useState,useContext} from 'react';
import { AppContext } from '../context/AppContext';
import GetToken from '../components/loginAndRegistation/getToken';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
const Login = () => {
  const [state ,setState] = useState("Sign Up");
  const [email, setEmail] = useState('');
  const [passward,setPassward]= useState('');
  const [name ,setName]= useState('');
  const {token, setToken,backendURL} = useContext(AppContext);
  const onSubmitHandler = async (event)=>{
       event.preventDefault();
       console.log("onSubmitHandler is called", state)
       try {
        if(state === 'Login'){
          const data = await GetToken( email , passward,backendURL)
          console.log("data in login : ", data)
          if(data.success){
            console.log("i am success 02", data)
            setToken(data.user_token)
            console.log("user_token : ",data.user_token)  
          }
        }
        else {
              toast     
        }
        
       } catch (error) {
           console.log(error);
        }
      
  }
  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center '>
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
          <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type="email"value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        <div className='w-full' >
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="pasward" onChange={(e)=>setPassward(e.target.value)} value={passward} />
        </div>
         <button className='bg-primary text-white w-full py-2 rounded-md text-base'> {state === 'Sign Up'?"Create Account" :"log in"}</button>
         {
          state === 'Sign Up'? <p>Already have an Account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer '>login here</span></p>
          : <p>Create a new Account?<span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer '>click here</span></p>
         }
         </div>
    </form>
  )
}

export default Login