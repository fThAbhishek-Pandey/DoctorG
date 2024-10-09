export {createContext} from 'react';
import { createContext } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import {useState,useEffect} from 'react'
export const AppContext = createContext();
const AppContextProvider = ( props)=>{
        const currencySymbol = '₹';
        const [doctors,setDoctors]= useState([]);
        const backendURL= import.meta.env.VITE_BACKEND_URL;
        const [token, setToken] =useState(localStorage.getItem('user_token')||'');
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

        const value ={
            doctors,currencySymbol,backendURL, token, setToken
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