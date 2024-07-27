import React from 'react'
import portfolios from '../assets/data/portfolioData'

function Modal({ activeId, setShowModal }) {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId)

  console.log(portfolio)

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5 mt-12 md:mt-[2.2rem] lg:mt-[2.4rem]">
        <div>
          <figure>
            <img
              className="rounded-lg"
              src={portfolio.imgUrl}
              alt="projectImage"
            />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-2">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-5 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Technologies
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-sm text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href={portfolio.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primaryColor text-white py-2 px-4 mt-2 rounded-[8px] font-[500] hover:bg-headingColor easein duration-300">
                Live Site
              </button>
            </a>
            <a
              href={portfolio.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primaryColor text-white py-2 px-4 mt-2 rounded-[8px] font-[500] hover:bg-headingColor easein duration-300">
                Source Code
              </button>
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-red-500 text-white absolute -top-[0.3rem] -right-[0.7rem] text-[25px] flex items-center justify-center rounded-lg leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default Modal
