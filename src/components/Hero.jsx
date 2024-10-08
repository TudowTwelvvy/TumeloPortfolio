import React from 'react'
import HeroImg from '../assets/images/TumeloPic.jpg'
import CountUp from 'react-countup'
import { GoMail } from 'react-icons/go'
import { RiAppsFill } from 'react-icons/ri'
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs'
import Typewriter from 'typewriter-effect'

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-10 relative">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row ">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[19px] "
            >
              Hello welcome!
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[700] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Tumelo Khanye <br />
              <span className="font-[700] text-[1.8rem] text-primaryColor">
                <Typewriter
                  options={{
                    strings: ['Junior Software Engineer', 'Frontend Developer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-6 rounded-lg">
                  <GoMail />
                  Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-smallTextColor"
              >
                see portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex  gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span className="mt-2">
                <RiAppsFill />
              </span>
              I am a dedicated web developer based in South Africa, passionate
              about crafting clean and functional websites. I have many years of
              experience, I specialize in front-end and back-end development,
              creating responsive and user-friendly interfaces.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  className="text-smallTextColor text-[16px] font-[600]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/illmindof.stukzen/"
                >
                  <BsFacebook />
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor text-[16px] font-[600]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/TudowTwelvvy"
                >
                  <BsGithub />
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor text-[16px] font-[600]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/twelvvytudow99"
                >
                  <BsTwitterX />
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor text-[16px] font-[600]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tumelo-khanye-1103b4262/"
                >
                  <BsLinkedin />
                </a>
              </span>
              <span>
                <a
                  className="text-smallTextColor text-[16px] font-[600]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/twelvvy_tudow/"
                >
                  <BsInstagram />
                </a>
              </span>
            </div>
          </div>

          <div className="basis-1/3 mt-10 sm:mt-0 bg-primaryColor p-4 h-[430px] mx-auto w-[350px] md:w-full md:h-full rounded-full">
            <figure className="flex items-center justify-center ">
              <img
                src={HeroImg}
                alt="tumeloPicture"
                className="rounded-full h-[400px] w-[300px] md:w-full md:h-full"
              />
            </figure>
          </div>

          <div className="md:basis-1/2 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="md-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[16px]">
                Years Building Personal Projects
              </h4>
            </div>
            <div className="md-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={20} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[16px]">
                Projects Completed
              </h4>
            </div>
            <div className="md-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={97} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[16px]">
                Success Rate
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
