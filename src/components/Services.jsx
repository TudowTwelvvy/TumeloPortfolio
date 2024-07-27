import React from 'react'
import frontendImg from '../assets/images/front-end.png'
import backendImg from '../assets/images/backend.png'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPython,
  SiRedux,
  SiWix,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaJava, FaGithub, FaGit, FaNpm } from 'react-icons/fa'
import { BsFiletypeSql, BsDatabaseFill } from 'react-icons/bs'

function Services() {
  return (
    <section id="services">
      <div className="container md:pt-2">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            what do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            {' '}
            As a dedicated web developer, I specialize in crafting high-quality,
            custom websites and web applications that bring your ideas to life.
            With a passion for clean code and intuitive design, I offer a range
            of services tailored to meet your unique needs.I integrate frontend
            and backend technologies seamlessly to create cohesive web
            applications that meet your business requirements. Whether it's API
            development, authentication systems, or complex data processing,
            I've got you covered.{' '}
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 h-full sm:block bg-indigo-300 left-1/2 transform -translate-x-1/2"></div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded-lg shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Crafting intuitive user interfaces is my expertise. I
                          utilize the latest frontend technologies such as
                          HTML5, CSS3, and JavaScript using frameworks like
                          React.js and Next.js to ensure your website not only
                          looks great but also delivers a seamless user
                          experience across devices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="frontendPic" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded-lg shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Power your website with robust backend solutions. From
                          server-side programming using Node.js and Express.js
                          to database management with MongoDB, MySQL, or
                          PostgreSQL I build scalable and efficient backend
                          systems that support your application's functionality
                          and performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="backendPic" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <h3 className="text-primaryColor font-[700] text-[2rem] mb-5 ">
            Skills
          </h3>
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="80"
            data-aos-duration="1000"
            className="flex flex-wrap border-[1px] p-4 gap-6 rounded-lg border-smallTextColor max-w-[600px]"
          >
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiHtml5 className="text-2xl text-[#e34c26]" />
              HTML5
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-[#264de4]"
            >
              <SiCss3 className="text-2xl" />
              CSS
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-[#f0db4f]"
            >
              <SiJavascript className="text-2xl" />
              Javascript
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiTypescript className="text-2xl text-[#007acc]" />
              Typescript
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-[#cb3837]"
            >
              <FaNpm className="text-2xl" />
              NPM
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiTailwindcss className="text-2xl  text-[#007acc]" />
              Tailwindcss
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-[#61DBFB]"
            >
              <SiReact className="text-2xl " />
              React
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiBootstrap className="text-2xl text-[#563d7c]" />
              Bootstrap
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiNextdotjs className="text-2xl text-black" />
              Next.js
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-[#3c873a]"
            >
              <SiNodedotjs className="text-2xl " />
              Node.js
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiExpress className="text-2xl text-black" />
              Express
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiMongodb className="text-2xl text-green-700" />
              MongodDb
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-red-500"
            >
              <SiMongoose className="text-2xl " />
              Mongoose
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiPython className="text-2xl text-[#4584b6]" />
              Python
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiWix className="text-2xl " />
              WIX
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <SiRedux className="text-2xl text-[#764abc]" />
              Redux
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <FaJava className="text-2xl text-[#f34f29]" />
              Java
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <TbApi className="text-2xl text-[#1c1d1e]" />
              Api
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <BsFiletypeSql className="text-2xl text-[#f29111]" />
              SQL
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <BsDatabaseFill className="text-2xl text-[#007acc]" />
              Database
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center text-[#f34f29]"
            >
              <FaGit className="text-2xl " />
              Git
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center "
            >
              <FaGithub className="text-2xl text-[#171515]" />
              Github
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
