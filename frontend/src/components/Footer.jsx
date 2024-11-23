import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt='logo' />
                    <p className='w-full md:w-2/3 text-gray-500 leading-6'>Book your doctor’s appointment hassle-free with us. Our platform ensures secure, fast, and easy scheduling for your healthcare needs. Connect with top specialists, access personalized care, and manage your appointments online. Your health is our priority. Trusted by thousands.</p>
                </div>

                {/* center */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                {/* right */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <li>+91-9999999999</li>
                        <li>prescripto@gmail.com</li>
                    </ul>

                </div>
            </div>
            <div>
                <hr />
                <p className='text-gray-500 py-5 text-sm text-center'>Copyright reserved</p>
            </div>
        </div>
    )
}

export default Footer