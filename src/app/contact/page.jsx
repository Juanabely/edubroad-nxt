"use client"
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'

const contact = () => {
  return (
    <div>
      <IoHomeOutline size={50} onClick={()=>window.location=('/')}/>
      <div>
      {/* Replace the URL below with your actual Visme form URL */}
      <iframe
        src="https://forms.visme.co/formsPlayer/epq4e64r-untitled-project"
        title="Visme Form"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    </div>
  )
}

export default contact