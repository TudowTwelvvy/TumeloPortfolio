import React, { useEffect, useRef } from 'react'
import logo from "../assets/images/tumelo-khanye-high-resolution-logo-transparent.png"
import { BsSend } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null)

  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        headerRef.current.classList.add('sticky-header')
      }else{
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  },[])

  const handleClick =(e)=>{
    e.preventDefault()
    
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top: location - 100,
      left: 0,
    })
  }

  const toggleMenu =()=> menuRef.current.classList.toggle('show-menu')

  return (
    <header ref={headerRef} className='w-full h-[100px] leading-[80px] flex items-center '>
      <div className='container'>
        <div className='flex items-center justify-between'>
          
          <div className=' max-w-[180px] w-[150px] md:w-[200px] '>
            <img src={logo} alt="logo" className='' />
          </div>

         
          
          <div className='menu' ref={menuRef} onClick={toggleMenu}>
            <ul className='flex items-center gap-2 md:gap-10'>
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">About</a></li>
  
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">Services</a></li>
           
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a></li>
            
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#contact">Contact</a></li>
            </ul>

          </div>
          
          

          <div className='flex items-center gap-4'>
           <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 '><BsSend /> Let's talk</button>

           <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><RiMenu3Fill /></span>
          </div>

      </div>
      </div>
      
    </header>
  )
}

export default Header