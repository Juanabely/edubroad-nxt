import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

function Box({Text,bg,circleColor}) {
  return (
    <div className={`flex flex-col justify-center items-start gap-5 px-2 h-[15rem] w-[17rem] ${bg}`}>
             <div className={`w-[50px] h-[50px]  rounded-full ${circleColor}`}/>
             <span className='text-2xl'>{Text}</span>
             <IoArrowForward/>
    </div>
  )
}

export default Box