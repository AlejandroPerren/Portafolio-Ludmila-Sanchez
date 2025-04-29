import React from 'react'
import Hero from './Home/Hero/Hero'

import ResponsiveNav from './Home/Navbar/ResponsiveNav'
import Certifications from './Home/Certifications/Certifications'

const Home = () => {
  return (
    <div>
      <ResponsiveNav/>
      <div>
      
        <Hero/>
        </div>

        <Certifications/>
    </div>
  )
}

export default Home