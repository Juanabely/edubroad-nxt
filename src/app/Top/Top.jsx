import Image from 'next/image'
import React from 'react'

const Top = () => {
  return (
    <section id='magical' className='w-full py-20'>
        <div className='flex flex-col gap-10 text-center items-center w-full'>
            <span className='text-4xl text-[#0F2F64]'>Top Universities for International Students </span>
            <div className='flex justify-around max-[900px]:flex-col w-full'>
               <Image src={'./Card1.svg'} width={300} height={300}/>
               <Image src={'./Card2.svg'} width={300} height={300}/>
               <Image src={'./Card3.svg'} width={300} height={300}/>
            </div>
        </div>
    </section>
  )
}

export default Top