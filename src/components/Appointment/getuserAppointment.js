import { toast } from "react-toastify";
import axios from "axios";
const getUserAppointments = async (backendURL,user_token,setAppointments) => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/appointments", {
        headers: { user_token },
      });
      // console.log("api data getuserappoint : ",data);
      if (data.success) {
        setAppointments(data.appointment);
        // console.log("appointments : ",data.appointment)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
export default getUserAppointments