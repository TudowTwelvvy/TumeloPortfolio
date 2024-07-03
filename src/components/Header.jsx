import React from 'react'
import logo from "../assets/images/tumelo-khanye-high-resolution-logo-transparent.png"
import { BsSend } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  return (
    <header className='w-full h-[100px] leading-[80px] flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*logo*/}
          <div className=' max-w-[180px] md:w-[200px] '>
            <img src={logo} alt="logo"/>
          </div>

          {/*menu*/}
          <div className='flex gap-10'>
            <ul className='text-smallTextColor font-[600]'><a href="#about">About</a></ul>
            <ul className='text-smallTextColor font-[600]'><a href="#services">Services</a></ul>
            <ul className='text-smallTextColor font-[600]'><a href="#portfolio">Portfolio</a></ul>
            <ul className='text-smallTextColor font-[600]'><a href="#contact">Contact</a></ul>
          </div>

          <div className='flex items-center gap-4'>
           <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 '><BsSend /> Let's talk</button>

           <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'><RiMenu3Fill /></span>
          </div>

      </div>
      </div>
      
    </header>
  )
}

export default Header