import React, { useEffect } from 'react'
import Aos from 'aos'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  useEffect(()=>{
    Aos.init()
  }, [])

  return (
    <div className=''>
      <Header/>
      <main>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App