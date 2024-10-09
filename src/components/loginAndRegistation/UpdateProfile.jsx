import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const UpdateProfile = async( backendURL,id,userProfile) => {
    try {
        const res = await axios.put(backendURL+ `/api/user/update/${id}`,userProfile)
        if(res.success){
            toast.success(res.message);
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
  return (
    <div>UpdateProfile</div>
  )
}

export default UpdateProfile