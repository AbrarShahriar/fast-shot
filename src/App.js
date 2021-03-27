import React from 'react'
import './App.css';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import NavBar from './components/NavBar'

import gsap from 'gsap'
import FoodMenu from './components/FoodMenu'
import DrinksMenu from './components/DrinksMenu'
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {

  const tl = gsap.timeline()

  const headImageLoaded = () => {
    tl.to('.bulb', { duration: 1, transform: 'translateY(0%)' })
  }

  return (
    <div className="App">

      <img className='bulb' alt='bulb' src={process.env.PUBLIC_URL + 'images/light2.png'} />

      <Header />

      <ImageSlider animate={headImageLoaded}/>

      <NavBar />

      <FoodMenu />

      <DrinksMenu />

      <div className="carpet-offset-container"></div>

      <Reviews />

      <Footer />

    </div>
  );
}

export default App;
