

import { toast } from "react-toastify";
import axios from "axios";
import Initpay from "./initpay";
const Razorpay = async (appointmentId, backendURL,user_token,setAppointments,navigate) => {
    console.log("i am in Razorpay",appointmentId, backendURL,user_token);
    try {
        const {data} = await axios.post(backendURL+'/api/user/payment-razorpay',{appointmentId},{headers:{user_token}})
        console.log("Razorpay Data : ",data)
        if(data.success){
            console.log(data.order)
            Initpay(data.order, backendURL,user_token,setAppointments,navigate);
        }

    } catch (error) {
        console.log(error);
        toast.error(error.messsage);
    }

}

export default Razorpay