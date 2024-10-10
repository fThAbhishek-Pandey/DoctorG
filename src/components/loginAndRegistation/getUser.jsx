import axios from 'axios';
import { toast } from 'react-toastify';
const GetUser = async (backendURL , user_token, setUserProfile) => {
    console.log ("i am called : getToken ",user_token);
     try {
           const {data}= await axios.get(backendURL + `/api/user/profile`, {headers: {user_token}});
           console.log ("data : ",data);
           if (data.success) {
                console.log("i am success")
                setUserProfile(data.user);
                return {success:true}
           }
           else {
               console.log ('there is error :', data.message)
               toast.error(data.message);
               return {message: data.message}
           }
     } catch (error) {
          console.log(error)
          toast.error(error.message);
          return {message: error.message};
     }
}

export default GetUser