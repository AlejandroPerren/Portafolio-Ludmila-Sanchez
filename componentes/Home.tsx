import React from 'react'
import Hero from './Home/Hero/Hero'

import ResponsiveNav from './Home/Navbar/ResponsiveNav'

const Home = () => {
  return (
    <div>
      <ResponsiveNav/>
      <div>
      
        <Hero/>
        </div>
    </div>
  )
}

export default Home