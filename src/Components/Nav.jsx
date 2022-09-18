import React from 'react'

const Nav = () => {
  return (
<div className=' h-fit'>
    <nav className='flex justify-center bg-gray-700 h-1/10'>
            <ul className='flex justify-evenly w-full p-1'>

                <div className='hover:bg-white w-2/12 bg-red-700'>
                <li className='text-white  hover:text-black'><a href="/"> About</a></li>
                </div>

                <div className='hover:bg-white w-2/12  bg-red-600'>
                <li className='text-white  hover:text-black'> <a href='skills'>Skills</a></li>
                </div>
                
                <div className='hover:bg-white w-2/12 bg-red-700'>
                <li className='text-white  hover:text-black'><a href='prof'>Profile</a> </li>
                </div>
                
                <div className='hover:bg-white w-2/12 bg-red-600 '>
                <li className='text-white  hover:text-black '> <a href="signup">Signup</a></li>
                </div>

                <div className='hover:bg-white w-2/12 bg-red-700'>
                <li className='text-white  hover:text-black'> <a href='login'>Signin</a> </li>
                </div>

                <div className='hover:bg-white w-2/12 bg-red-600'>
                <li className='text-white  hover:text-black'><a href='logout'>logout</a></li>
                </div>
            </ul>

    </nav>
        
</div>
  )
}

export default Nav