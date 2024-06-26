import React, { useState } from "react";
import Camera from "./Camera";
import ImageUploader from "./ImageUploader";
import MapComponent from "./MapComponent";
import axios from "axios";

const Users = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleNumb = (e) => {
    setNumber(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
    console.log(e.target.value);
  };

  const handleMsg = (evt) => {
    setMsg(evt.target.value);
    console.log(evt.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await axios.post('https://petbudyyapi.onrender.com/api/v1/register',{
        name: name,
        phoneNumber: number,
        email: mail,
        message: msg,
        location : "Location yet to be found!"
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(()=>{
      alert("Form submitted!");
      setName("");
      setNumber("");
      setMail("");
      setMsg("");
    }).catch((err)=>{
      alert(err.message);
    })
  };

  return (
    <div className="w-full min-h-screen bg-bg-image flex justify-center items-center bg-no-repeat bg-cover bg-center p-4">
      <div className="w-full h-auto lg:h-auto opacity-85 border border-gray-100 rounded-2xl shadow-2xl bg-white flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-1/2 h-full p-8 flex flex-col justify-between  items-center ">
          <div className="w-full h-[50%]">
            <div>
             <p className="font-bold text-center pb-12 text-3xl">Get Nearest Aid</p>
            </div>
          </div>
          <div className="w-full h-[10%]">
            <div>
              <MapComponent/>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-auto lg:h-full bg-[#90adcb] p-8 flex flex-col justify-center">
          <h1 className="font-bold font-mono text-center mb-4">
            Fill the form to get nearest Aid & Help
          </h1>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="w-full">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Enter your full name"
                className="border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-[#90adcb] py-2 px-4 placeholder:text-white"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>Phone No.</label>
              <input
                type="text"
                value={number}
                onChange={handleNumb}
                placeholder="Enter your no."
                className="border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-[#90adcb] py-2 px-4 placeholder:text-white"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>E-mail</label>
              <input
                type="email"
                value={mail}
                onChange={handleMail}
                placeholder="Enter your E-mail"
                className="border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-[#90adcb] py-2 px-4 placeholder:text-white"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>Attach Picture</label>
              <ImageUploader />
              <input
                type="text"
                value={msg}
                onChange={handleMsg}
                placeholder="Enter your message"
                className="border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-[#90adcb] py-2 px-4 placeholder:text-white"
                required
              />
            </div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="bg-black text-white p-2 w-40">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;