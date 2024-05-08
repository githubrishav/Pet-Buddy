
import React, { useState } from 'react'


const Userform = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [mail, setMail] = useState("")
  const [msg, setMsg] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
    console.log(e.target.value);
  }

  const handleNumb = (e) => {
    setNumber(e.target.value)
  }
  const handleMail = (e) => {
    setMail(e.target.value);
    console.log(e.target.value);
  }

  const handleMsg = (evt) => {
    setMsg(evt.target.value)
    console.log(evt.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked')
  }


  return (
    <div  className='w-full h-full flex items-center justify-center py-16 ' >
      <div className="w-[70rem] h-[40rem]  border border-gray-100 rounded-2xl shadow-2xl bg-white  ">
        <div className='w-full h-full flex items-center justify-between '>
          <div className=" w-[43rem] h-full pl-8 pt-8">
            <h1 className='font-bold text-5xl pl-18 pt-32'>Get Your Free Copy </h1>
            <p className='text-sm pl-18 pt-8 pr-20'>Enter your details and share your location to find nearest clinics Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum et eaque magnam sunt? Rem consectetur vitae sapiente dolor, delectus sunt, architecto aperiam obcaecati dolore eaque corporis, maxime aliquam placeat pariatur.</p>
          </div>
          <div className=" w-[32rem] h-[36rem]  bg-amber-100 mr-8 ">
            <h1 className=' font-bold font-mono w-full text-center mb-4 mt-4'>Fill the form to get nearest </h1>
            <form action="#" onSubmit={handleSubmit} className=''>
              <div className="w-full h- flex flex-col gap-1.5 pl-8 pr-8">
                <p className='w-full'>Full Name</p>
                <input type="text" value={name} onChange={handleName} placeholder='Enter your full name ' className='border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-[#fff0ce] py-2 px-4' required />
                <p>Phone No.</p>
                <input type="text" value={number} onChange={handleNumb} placeholder='Enter your no.' className='border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-amber-100 py-2 px-4' required />
                <p>E-mail</p>
                <input type="email" value={mail} onChange={handleMail} placeholder='Enter your E-mail' className='border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-amber-100 py-2 px-4' required />
                <p>Attach Picture</p>
                <img src="" alt="img" className='mb-8 border-2 h-16' />
                <input type="text" value={msg} onChange={handleMsg} placeholder='Enter your message' className='border-t-0 border-l-0 border-r-0 border border-b-2 outline-none border-b-[rgba(0,0,0,0.2)] bg-amber-100 w-full py-4 px-2' required />
              </div>
              <div className="flex flex-row justify-center mt-8">
                <button type='submit' className='bg-amber-300 text-black p-2 w-40 '>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Userform
