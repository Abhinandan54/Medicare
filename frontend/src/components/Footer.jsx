import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Medicare, we are committed to making healthcare more accessible, reliable, and efficient for everyone. Our platform bridges the gap between patients and healthcare providers by offering a seamless digital experience for managing medical services.

We aim to simplify healthcare by enabling users to easily connect with trusted doctors, manage appointments, access prescriptions, and stay informed about their health—all in one secure platform. By combining technology with care, Medicare ensures that quality healthcare is just a few clicks away.

Our mission is to empower individuals to take control of their health while supporting medical professionals with smart, time-saving solutions. We prioritize data security, transparency, and user-friendly design to deliver a dependable healthcare experience.

At Medicare, your health is our priority—because better healthcare begins with better access.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-8264329082</li>
            <li>Medicare@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@Medicare - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
