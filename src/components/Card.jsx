import React from 'react'

const Card = ({circleColor,header,text}) => {
  return (
    <div className='flex flex-col bg-white w-[376px] h-[300px] justify-around text-start '>
        <div className={`h-[5rem] w-[5rem] rounded-full ${circleColor}`}/>
        <span className='text-2xl text-[#0F2F64]'>{header}</span>
        <span className='text-[#536288]'>{text}</span>
    </div>
  )
}

export default Card