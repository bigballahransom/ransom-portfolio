import Image from 'next/image'
import React from 'react'

const Me = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
    <div>
    <Image src='/assets/images/andrewmtn.png' width={400} height={400} className='text-white rounded-2xl border border-army shadow'/>
    </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">WHO AM I</h2>
        <h1 className="heading">A Man of Many Interests</h1>
        <p className="leading-relaxed">
        Whether I'm shredding down snowy slopes on a snowboard, strumming a tune on my guitar, or passing 'the rock' to some friends, I'm always eager to dive into new experiences. 
        </p>
        <h2 className="text-sm title-font text-gray-500 tracking-widest pb-2 pt-4">HOBBIES</h2>
        <div className='flex flex-wrap gap-2'>
            <div className='bg-white px-3 py-1 rounded-full text-sm'>Snowboarding</div>
            <div className='bg-white px-3 py-1 rounded-full text-sm'>Art</div>
            <div className='bg-white px-3 py-1 rounded-full text-sm'>Guitar</div>
            <div className='bg-white px-3 py-1 rounded-full text-sm'>Basketball</div>
            <div className='bg-white px-3 py-1 rounded-full text-sm'>Hands On Projects</div>
            <div className='bg-white px-3 py-1 rounded-full text-sm'>Learning New Things</div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Me
