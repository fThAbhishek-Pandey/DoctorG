export {createContext} from 'react';
import { createContext } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import {useState,useEffect} from 'react'
import GetUser from '../components/loginAndRegistation/getUser';
export const AppContext = createContext();

const AppContextProvider = ( props)=>{
        const currencySymbol = '₹';
        const [doctors,setDoctors]= useState([]);
        const backendURL= import.meta.env.VITE_BACKEND_URL;
        const [userProfile, setUserProfile] = useState([]);
        const [user_token, setToken] =useState(localStorage.getItem('user_token')||'');
        const getAllDoctors = async()=>{
            console.log("i am called : ");
            try {

                const {data} = await axios.get(backendURL+ '/api/doctors/list');
                console.log("appcontext data",data)
                if(data.success){
                    setDoctors(data.doctors);
                }
            } catch (error) {
                console.log(error.message)
                toast.error(error.message);
            }
            
        }
        useEffect(()=>{getAllDoctors()},[])
        useEffect(()=>{
            console.log("i am refresh call ")
         if(user_token){
            const user =  GetUser(backendURL, localStorage.getItem('user_token'), setUserProfile );
            console.log("user in get user :",user);  
         }   
          else {
            setUserProfile(false);
          }  
         },[user_token])
        const value ={
            doctors,currencySymbol,backendURL, user_token, setToken,userProfile, setUserProfile,GetUser
        }
        
        return (
            <AppContext.Provider value={value}>
                {
                 props.children
                }
            </AppContext.Provider>
        )
}
export default AppContextProvider;