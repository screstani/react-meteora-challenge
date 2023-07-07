import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Convenience from '../components/Convenience'

const Home = () => {
  return (
    <div>
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Convenience/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
