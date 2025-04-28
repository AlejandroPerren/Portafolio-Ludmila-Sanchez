import React from 'react'
import Name from './Name'
import Picture from './Picture'

const Hero = () => {
  return (
    <div className='relative flex justify-center'>
        <Name/>
        <Picture/>
    </div>
  )
}

export default Hero