import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const UpdateProfile = async( backendURL,user_token,formData) => {
    try {
        const {data} = await axios.put(backendURL+ `/api/user/profile/edit`,formData,{headers:{user_token}})
        if(data.success){
            toast.success(data.message);
        }
        else {
            console.log(data.message);
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
}

export default UpdateProfile