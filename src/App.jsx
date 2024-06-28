import React, { useEffect } from 'react'
import Aos from 'aos'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  useEffect(()=>{
    Aos.init()
  }, [])

  return (
    <div className=''>
      <Header/>
      <main>
        <Hero/>
      </main>
      <Footer/>
    </div>
  )
}

export default App