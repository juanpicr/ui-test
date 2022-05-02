import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Navbar from 'layout/Navbar'
import Hero from 'layout/Hero'
import { BannerBottom, BannerTop, MaxCentered, Separator } from 'components/index'
import Main from 'layout/Main'
import Footer from 'layout/Footer'
import PastTrials from 'pages/PastTrials'

function App () {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MaxCentered>
        <BannerTop/>
        <Main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pastTrials" element={<PastTrials />}/>
          </Routes>
        </Main>
        <BannerBottom/>
        <Separator/>
        <Footer/>
      </MaxCentered>
    </>
  )
}

export default App
