import React from 'react'
import '../app/header.css'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
function Nav() {
  return (
    <header>
      <a href="#"
        ><img
          src="https://github.com/ecemgo/today-i-learned-app/assets/13468728/4f2923ea-9eca-4221-8b18-7198f78fd04e"
          alt="logo"
          className="logo"
      /></a>

      <input type="checkbox" id="check" />
      <label for="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"><CiMenuBurger /></i>
        <i className="bx bx-x" id="close-icon"><IoClose /></i>
      </label>

      <nav className="navbar">
        <a href="#" className="nav-item" >Home</a>
        <a href="#about" className="nav-item" >About</a>
        <a href="#visit" className="nav-item" >Plan Your Visit</a>
        <a href="#magical" className="nav-item" >Magical Places</a>
        <a href="#contact" className="nav-item" >Contact</a>
      </nav>
    </header>
  )
}

export default Nav