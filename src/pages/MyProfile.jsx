import React, { useState,useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import UpdateProfile from "../components/loginAndRegistation/UpdateProfile";
import {assets} from '../assets/assets.js'
const MyProfile = () => {
  const {userProfile, setUserProfile, backendURL, user_token, GetUser} = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  // console.log ("user_token",user_token)

  const onSave = async ()=>{
        // console.log("i am onSave");
        // console.log("onsave : ", userProfile);
        const formData = new FormData()
        formData.append('name',userProfile.name)
        formData.append('address',userProfile.email)
        formData.append('phone',userProfile.phone)
        formData.append('gender',userProfile.gender)
        formData.append('dob',userProfile.dob)
        image && formData.append('image',image)
        await UpdateProfile(backendURL ,user_token,formData);
        await GetUser(backendURL,localStorage.getItem("user_token"), setUserProfile)
        setIsEdit(false)
  }
  return userProfile && (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      {
        isEdit
        ? <label htmlFor="userProfilepic">
          <div className="inline-block relative cursor-pointer">
            <img className="w-36 rounded opacity-75 " src={image ? URL.createObjectURL(image) : userProfile.image} alt=""  />
            <img className="w-10 absolute bottom-12 right-12"    src={image? '': assets.upload_icon} alt="" />
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="userProfilepic" hidden />
        </label>
        : <img className="w-36 rounded" src={userProfile.image} alt={userProfile.name} />
      }
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userProfile.name}
          onChange={(e) =>
            setUserProfile((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4  ">
          {userProfile.name}
        </p>
      )}
      <hr className="bg-zink-400 h-[1px] border-none" />
      <div>
        <p className ="text-neutral-500 underline mt-3">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-newtral-700 ">
          <p className="font-medium">Email id : </p>
          <p className="text-blue-500">{userProfile.email}</p>
          <p className="font-medium">Phone : </p>
          
            {" "}
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-52  "
                type="text"
                value={userProfile.phone}
                onChange={(e) =>
                  setUserProfile((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400">{userProfile.phone}</p>
            )}
    

          <p className="font-medium">Address : </p>
          <div>
            {isEdit ? (
              <input
                className="bg-gray-50"
                type="text"
                value={userProfile.address}
                onChange={(e) =>
                  setUserProfile((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-gray-500">{userProfile.address}</p>
            )}
            <br />
            {isEdit ? (
              <input
                className="bg-gray-50"
                type="text"
                value={userProfile.address}
                onChange={(e) =>
                  setUserProfile((prev) => ({
                    ...prev,
                    address:  e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-gray-500">{userProfile.address}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">Basic Information</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender :</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserProfile((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="--Not Selected--">--Not Selected--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userProfile.gender}</p>
          )}
          <p className="font-medium">Birthday : </p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              value={userProfile.dob||"2005-12-01"}
              onChange={(e) => (setUserProfile((prev) =>({
                  ...prev,
                  dob: e.target.value,
              }))
          )}  
            />
          ) : (
            <p className="text-gray-400">{userProfile.dob||"2005-12-01"}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all" onClick={onSave}>
            {" "}
            Save Information
          </button>
        ) : (
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
