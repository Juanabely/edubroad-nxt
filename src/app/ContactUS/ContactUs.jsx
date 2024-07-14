"use client"
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    
    const handleContactButton = ()=>{
      window.location=('/contact')
    }
  return (
    <section id='contact'  className='w-[100%] bg-[#A27FFF]'>
        <div className='flex justify-between py-[2rem] w-full max-[450px]:flex-col'>
          <Image src={'./contactimage1.svg'} height={100} width={50}/>
          <div className='flex flex-col gap-5'>
            <span className='text-5xl text-white font-bold'>Know more about our services</span>
            <div className='flex justify-center gap-3 max-[450px]:flex-col'>
                <button className='bg-white text-black p-4 rounded-[7px]' onClick={()=>handleContactButton()} >Make an Appointment</button>
                <button className='bg-transparent p-4 border border-white rounded-[7px]'>Contact Us</button>
            </div>
        </div>
          <Image src={'./contactimage2.svg'} height={100} width={50}/>
        </div>
    </section>
  )
}

export default ContactUs