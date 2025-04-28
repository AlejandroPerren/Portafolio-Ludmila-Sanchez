import Image from 'next/image'
import React from 'react'

const Picture = () => {
  return (
    <div className='m-auto absolute flex justify-center bg-transparent bottom-1'>
        <Image 
        src={"/pictures/fotoperfilredondo2-Photoroom.png"}
        width={400}
        height={400}
        alt='Foto Personal'
        className='rounded-full'

        />
    </div>
  )
}

export default Picture