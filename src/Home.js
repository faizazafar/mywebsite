import React from 'react'
import Aboutus from './components/Aboutus'
import Footer from './components/Footer'
import Header from './components/Header'
import Howitwork from './components/Howitwork'
import Navbar from './components/Navbar'
import Navbarr from './components/Navbarr'
import Services from './components/Services'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <Navbarr></Navbarr>
      <Header></Header>
      <Howitwork> </Howitwork>
      <Aboutus></Aboutus>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
      

    </div>
  )
}
