import React from 'react'
import {data} from '../../lib/data'
import Card from '../../components/Card'

const ChooseUS = () => {
  return (
   <section id='visit' className='bg-blue-50 w-full py-10'>
    <div className='flex flex-col items-center gap-10 justify-center'>
      <span className='text-6xl font-semibold text-[#0F2F64]'>Why Choose Us ?</span>
      <div className='flex justify-around w-full max-[900px]:flex-col max-[900px]:items-center gap-5'>
        {
            data.map((item,index)=>(
                <Card 
                circleColor={item.circleColor}
                header={item.header}
                text={item.text}
                key={index}
                />
            ))
        }
      </div>
    </div>
   </section>
  )
}

export default ChooseUS