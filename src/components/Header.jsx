import React, { useEffect, useRef } from 'react'
import logo from '../assets/images/logo.png'
import { RiMenu3Fill } from 'react-icons/ri'
import { MdDownload } from 'react-icons/md'
import resume from '../assets/01-Tumelo-Khanye-CV.pdf'

function Header() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 85 ||
        document.documentElement.scrollTop > 85
      ) {
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }
  console.log(headerRef)

  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top: location - 85,
      left: 0,
    })
  }

  const toggleMenu = () => menuRef.current.classList.toggle('show-menu')

  return (
    <header
      ref={headerRef}
      className="w-full h-[85px] leading-[85px] flex items-center"
    >
      <div className="container border-b-2 border-gray-200  pb-2 md:pb-0 ">
        <div className="flex items-center justify-between">
          <div className=" max-w-[180px]  ">
            <img src={logo} alt="logo" className="w-[150px] md:w-[200px]" />
          </div>

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-2 md:gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] hover:text-primaryColor ease-in duration-100"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] hover:text-primaryColor transition ease-in duration-100"
                  href="#services"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] hover:text-primaryColor transition ease-in duration-100"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] hover:text-primaryColor transition ease-in duration-100"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 text-sm">
                <MdDownload />
                Resume
              </button>
            </a>

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <RiMenu3Fill />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
