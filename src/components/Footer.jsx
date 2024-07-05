import React from 'react'
import {  BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import logo from "../assets/images/tumelo-khanye-footer-transparent.png"

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-[#12141e]'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>Do you want to make beautiful projects</h2>
            <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-6 rounded-lg'><GoMail />Hire me</button>
              </a>
          </div>

          <div className="w.full sm:w-1/2">
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi labore harum quos dolorem inventore voluptatem magni voluptates quibusdam quasi optio quis sed ullam. Porro delectus aperiam tempora sapiente numquam.</p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
            <span className='text-gray-300 font-[600] text-[15px]'>Follow Me:</span>
            <span className=' h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-lg cursor-pointer flex justify-center items-center'>
              <a href="#github" className='text-white text-grap-300 font-[500] text-[18px]'><BsGithub/></a>
            </span>
            <span className=' h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-lg cursor-pointer flex justify-center items-center'>
              <a href="#facebook" className='text-white text-grap-300 font-[500] text-[18px]'><BsFacebook/></a>
            </span>
            <span className=' h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-lg cursor-pointer flex justify-center items-center'>
              <a href="#github" className='text-white text-grap-300 font-[500] text-[18px]'><BsTwitterX/></a>
            </span>
            <span className=' h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-lg cursor-pointer flex justify-center items-center'>
              <a href="#linkedin" className='text-white text-grap-300 font-[500] text-[18px]'><BsLinkedin/></a>
            </span>
            <span className=' h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-lg cursor-pointer flex justify-center items-center'>
              <a href="#instagram" className='text-white text-grap-300 font-[500] text-[18px]'><BsInstagram/></a>
            </span>
          </div>
          </div>
        </div>
        <div >
            <ul className='flex items-center justify-center gap-2 md:gap-10 mt-10'>
              <li><a className='text-gray-400 font-[600]' href="#about">About</a></li>
  
              <li><a className='text-gray-400 font-[600]' href="#services">Services</a></li>
           
              <li><a className='text-gray-400 font-[600]' href="#portfolio">Portfolio</a></li>
            
              <li><a className='text-gray-400 font-[600]' href="#contact">Contact</a></li>
            </ul>

        </div>
      </div>

      <div className='bg-[#1b1e29]  mt-14'>
        <div className="container">
          <div className='flex items-center justify-center sm:justify-between'>

            <div className='hidden sm:block'>
               <div className=' max-w-[180px] md:w-[200px] '>
                 <img src={logo} alt="logo"/>
               </div>
            </div>

            <div>
              <p className='text-gray-400 text-[14px]'>Copyright {year} developed by Tumelo Khanye - All rights reserved</p>
            </div>

          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer