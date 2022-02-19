import React from 'react'

function Sidebar() {
  return (
      <div>
        <h1 className="font-sans text-center md:text-left max-w-30 m-auto font-bold text-teal-700 my-2">Angela Davidson</h1>
        <p className='md:max-w-[60%] text-teal-300 md:mr-auto text-center md:text-left'>
            This is Angela. She is an orphan. She is in need of financial aid and people to help her get 
            on her feet.
        </p>
        <button className='bg-teal-800 text-white border-teal-500 border-2 inline-block px-4 py-2 rounded mt-5 hover:bg-white hover:text-teal-800 transition-color'>Support</button>
      </div>
   
  )
}

export default Sidebar