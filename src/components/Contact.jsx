import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)

    emailjs
      .sendForm("service_27o9e0n", "template_0z9rp79", form.current, {
        publicKey: "_Xvu2HrNn8Gm6YJYu",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          setIsLoading(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false)
        },
      );
  };

  return (
    <section id='contact' className='pb-16'>
      <div className="container">
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
        <div className='md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56906.47827899848!2d29.230114399999998!3d-26.946153049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eec9ccc71d96d13%3A0xabb3a2a74473f149!2sStanderton!5e0!3m2!1sen!2sza!4v1719989275520!5m2!1sen!2sza" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
              <div className='mb-5'>
                <input type="text" placeholder='Enter your name' name="from_name" className='w-full p-3 focus:outline-none rounded-lg' required />
              </div>

              <div className='mb-5'>
                <input type="email" placeholder='Enter your email' name="from_email" className='w-full p-3 focus:outline-none rounded-lg' required/>
              </div>

              <div className='mb-5'>
                <input type="text" placeholder='Subject' name="subject" className='w-full p-3 focus:outline-none rounded-lg' required/>
              </div>

              <div className='mb-5'>
                <textarea rows={3} placeholder='Write your message' name="message" className='w-full p-3 focus:outline-none rounded-lg' required/>
              </div>

              <button className='w-full p-3 focus:outline-none rounded-lg bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150 disable:opacity-40' value="Send" disabled={isLoading}>{isLoading? "Loading..." : "Send Message"}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact