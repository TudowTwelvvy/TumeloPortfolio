import React, { useEffect, useState } from 'react'
import portfolios from '../assets/data/portfolioData'
import Modal from './Modal';


function Portfolio() {
  const [nextItems,setNextItems]= useState(6)
  const [allPortfolios, setAllPortfolios] = useState(portfolios);
  const [selectTab,setSelectTap]= useState("all");
  const [showModal ,setShowModal] = useState(false);
  const [activeId,setActiveId] = useState(null)

  const handleLoadMore=()=>{
    setNextItems(prev=> prev+3)
  }

  const handleShowModal =(id)=>{
    setShowModal(true) 
    setActiveId(id)  
  }
  
  useEffect(()=>{
    if(selectTab === "all"){
      setAllPortfolios(portfolios)
    }
    if(selectTab === "frontend"){
      const filteredPortfolios = portfolios.filter((item)=>item.category ==='Frontend')
      setAllPortfolios(filteredPortfolios)
    }
    if(selectTab === "fullstack"){
      const filteredPortfolios = portfolios.filter((item)=>item.category ==='Fullstack')
      setAllPortfolios(filteredPortfolios)
    }
  },[selectTab])

  return (
    <section id="portfolio">
      <div className='container'>
        <div className='flex items-center justify-between flex-wrap mb-4'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-headingColor text-[2rem] font-[700]'>My recent projects</h3>
          </div>

          <div className='flex gap-3 '>
            <button onClick={()=>setSelectTap("all")} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-lg'>All</button>
            <button onClick={()=>setSelectTap("frontend")} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-lg'>Frontend</button>
            <button onClick={()=>setSelectTap("fullstack")} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-lg'>Fullstack</button>
          </div>

        </div>

        <div className='flex items-center gap-4 flex-wrap'>
          {
            allPortfolios?.slice(0,nextItems)?.map((portfolio,index)=>(
              <div key={index} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000" className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                <figure>
                  <img className='rounded-lg' src={portfolio.imgUrl} alt="portfolioImage" />
                </figure>

                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <button onClick={()=> handleShowModal(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-lg font-[500] ease-in duration-200'>See Details</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='text-center mt-6'>
          {
            nextItems< allPortfolios.length && portfolios.length > 6 &&(
              <button onClick={handleLoadMore} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-lg font-[500] ease-in duration-200'>Load More</button>

            )
          }
          
        </div>
      </div> 
      {
        showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>
      }
    </section>
  )
}

export default Portfolio