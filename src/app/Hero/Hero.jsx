"use client"
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

function Hero() {
  return (
    <section className=''>
        <div className='flex justify-between items-center max-[900px]:flex-col'>
            <div className='flex flex-col w-[50%] gap-4 max-[900px]:w-[90%]'>
                <span className='text-[#A27FFF] text-6xl font-bold '>Global Expeditions Begin Here</span>
                <span className='text-[#4EB2F9] text-4xl font-semibold'>Build a dream career</span>
                <span className='text-[#536288] text-2xl font-normal'>International students prefer to study in USA The country hosts more than a million international students and is one of the most popular global educational hubs.</span>
                <Image src={'./Partner.svg'} width={600} height={300} className=''/>
               <div><span>Students</span> <CountUp start={100} end={1000}/> <span>+</span></div>
            </div>
            <div>
                <Image src='./Graduate.svg' width={800} height={800}/>
            </div>
        </div>
    </section>
  )
}

export default Hero