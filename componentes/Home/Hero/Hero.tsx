import React from 'react'
import Name from './Name'
import Picture from './Picture'

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center items-center py-20 px-4'>
      <Picture />
      <Name />
    </div>
  )
}

export default Hero
