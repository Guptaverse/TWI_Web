import React from 'react'
import Nav from '../../components/NavBar/Nav'
import Onboarding from '../../components/Onboarding/Onboarding'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Card from '../../components/Card/Card'
import Slider from '../../components/Slider/Slider'
import Venues from '../../components/BookVenues/Venues'
import Reviews from '../../components/ReviewsComponent/Reviews'
import Footer from '../../components/Footer/Footer'
import "./Home.css"


const Home = () => {
  const cards = [
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>
  ]
  return (
    <div className='Home-container'>
        <Nav/>
        <Onboarding/>
        <HowItWorks/>
        {/* <Card/> */}
        <Slider cards={cards}/>
        <Venues/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home