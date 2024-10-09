import axios from 'axios';

import { toast } from 'react-toastify';
const GetToken = async (email, password,backendURL) => {
    console.log ("i am called : getToken ",email, password,backendURL);
     try {
           const {data}= await axios.post(backendURL + '/api/user/login',{email :email , password:password});
           console.log ("data : ",data);
           if (data.success) {
                console.log("i am success")
                localStorage.setItem('user_token', data.user_token)
                toast.success("you are login")
                return data
           }
           else {
               console.log ('there is error :', data.message)
               toast.error(data.message);
               return {message: data.message}
           }
     } catch (error) {
          console.log(error)
          return {message: error.message};
     }
}

export default GetToken