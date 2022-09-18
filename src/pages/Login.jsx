import React from 'react'
import { Link } from "react-router-dom"



const Login = () => {
  return (
    <div className=" h-screen flex justify-center">
    <div className='h-1/3 w-52 flex justify-center self-center bg-indigo-600 bg-opacity-90'>
       <form className='self-center  justify-center '>
          <div className=''>
            <input className='input w-full bg-slate-500 text-center rounded-xl ' placeholder='UserName'></input>
          </div>
          <div>
            <input className=' mt-6 w-full text-center rounded-xl' placeholder='Password'></input>
          </div>

          <button className='bg-blue-500  w-28 mt-6 p-2 rounded-xl hover:bg-white'> Login </button>
     </form>
    </div>
 </div>
  )
}

export default Login