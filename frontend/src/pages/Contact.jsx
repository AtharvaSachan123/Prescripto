import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {




  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'> US</span></p>
      </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
          <img className='w-full max-w-[360px]' src={assets.contact_image} alt=''/>
          <div className='flex flex-col justify-center items-start gap-6 '>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
            <p className='text-gray-500 '>54709 Sarojini Nagar, <br/> Near Sanik School, Lucknow, India</p>
            <p className='text-gray-500'>Tel: (+91) 9999999999 <br/> Email:prescipto@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'> Careers at PRESCRIPTO</p>
            <p className='text-gray-500'> Learn more about our teams and job openings. </p>
            <button className='border-2 border-gray-400 w-auto px-10 py-3 hover:text-white hover:bg-gray-500 transition-all duration-500 '> Explore Jobs</button>
          </div>
        </div>

    </div>
  )
}

export default Contact