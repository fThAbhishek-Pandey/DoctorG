import React, { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Abhishek Pandey",
    image: assets.profile_pic,
    email: "abhishek830564@gmail.com",
    phone: "+91 8400005427",
    Address: {
      street: "Shastri Nagar",
      City: "PratapGarh, UP",
    },
    gender: "Male",
    dob: "2000-01-29",
  });
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt={userData.name} />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4  ">
          {userData.name}
        </p>
      )}
      <hr className="bg-zink-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-newtral-700 ">
          <p className="font-medium">Email id : </p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone : </p>
          <p>
            {" "}
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-52  "
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
          </p>

          <p className="font-medium">Address : </p>
          <div>
            {isEdit ? (
              <input
                className="bg-gray-50"
                type="text"
                value={userData.Address.street}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    Address: { street: e.target.value },
                  }))
                }
              />
            ) : (
              <p className="text-gray-500">{userData.Address.street}</p>
            )}
            <br />
            {isEdit ? (
              <input
                className="bg-gray-50"
                type="text"
                value={userData.Address.City}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    Address: { City: e.target.value },
                  }))
                }
              />
            ) : (
              <p className="text-gray-500">{userData.Address.City}</p>
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
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday : </p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              value={userData.dob}
              onChange={(e) => (prev) =>
                setUserData({ ...prev, dob: e.target.value })}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(false)}>
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
