import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const UpdateProfile = async( backendURL,token,userData) => {
    try {
        const res = await axios.put(backendURL+ `/api/user/profile/edit`,userData,{headers:{user_token: token}})
        if(res.success){
            toast.success(res.message);
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
}

export default UpdateProfile