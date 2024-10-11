import {toast} from 'react-toastify'
import axios from 'axios'
const CancelAppointment = async (appointmentId,backendURL, user_token ) => {
     try {
       console.log ("i am CancelAppointment",appointmentId)
       const {data} = await axios.put(backendURL+ '/api/user/cancel-appointment',{appointmentId},{headers:{user_token}})
       if(data.success){
           toast.success(data.message);
           return data.success;
       }
       else {
         toast.error(data.message);
       }
     } catch (error) {
        console.log(error);
        toast.error(error.message);
     }
}

export default CancelAppointment