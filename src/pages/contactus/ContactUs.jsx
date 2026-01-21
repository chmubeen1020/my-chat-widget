import React from 'react'
import ContactForm from './ContactForm'
import FaqSection from '../home/HomeFaq'

const ContactUs = () => {
  return (
    <>
    <div className='pt-16 md:pt-14'>
    <ContactForm/>
    </div>
     <div className="bg-gradient-to-b from-white via-white to-herogradient ">
      <FaqSection/>
      </div>
    </>
  )
}

export default ContactUs