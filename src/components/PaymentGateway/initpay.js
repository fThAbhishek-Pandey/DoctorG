
import axios from "axios";
import getUserAppointments from "../Appointment/getuserAppointment";
import { toast } from "react-toastify";
const Initpay = (order, backendURL,user_token,setAppointments,navigate) => {
console.log("i am Initpay : ",order);
    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount:order.amount,
        currency:order.currency,
        name:'Appointment Payment',
        description:'Feel the happiness',
        order_id: order.id,
        receipt:order.receipt,
        handler: async (responce)=>{
                console.log("responce : ",responce);
                try {
                    const {data} = await axios.post(backendURL+'/api/user/verifyRazorpay',{razorpay_order_id :responce.razorpay_order_id},{headers:{user_token}})
                     console.log("handler verify data : ",data);
                     if(data.success){
                        getUserAppointments(backendURL,user_token,setAppointments)
                        navigate('/my-appointment')
                        toast.success(data.message);
                     }
                     else{
                        toast.error(data.message)
                     }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
        }
       
    }
    const rzp  = new window.Razorpay(options);
    rzp.open()

}

export default Initpay