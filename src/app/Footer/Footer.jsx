import React from 'react'

const Footer = () => {
  return (
    <section className='w-full py-20 flex flex-col justify-around '>
        <div className='flex justify-between max-[900px]:flex-col'>
            <div className='flex flex-col gap-2'>
            <span className='text-3xl font-semibold text-pretty'>EduBroad</span>
            <span>We believe in research & dedication</span>
            <span>info@edubroad.com</span>
            <span>+254 123 456 789</span>
            </div>

            <div className='flex justify-between w-[60%] max-[900px]:flex-col'>
             <div className='flex flex-col gap-2'>
                <span className='text-2xl font-semibold'>Company</span>
                <span>About us</span>
                <span>Location</span>
                <span>careers</span>
             </div>
             <div className='flex flex-col gap-2'>
                <span className='text-2xl font-semibold'>Resouces</span>
                <span>FAQ</span>
                <span>Blog</span>
                <span>News</span>
             </div>
             <div className='flex flex-col gap-2'>
                <span className='text-2xl font-semibold'>Support</span>
                <span>Refund Policy</span>
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
             </div>
             <div className='flex flex-col gap-2'>
                <span className='text-2xl font-semibold'>Follow</span>
                <span>Faceboko</span>
                <span>Instagram</span>
                <span>Twitter</span>
             </div>
            </div>

        </div>
        <span className='text-center mt-10 '>© 2024 Edubroad Kenya Nairobi. Ltd. All rights reserved.
        </span>
    </section>
  )
}

export default Footer