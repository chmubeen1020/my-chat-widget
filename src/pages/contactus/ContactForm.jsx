import React, { useState } from 'react';
import { ContactUsIcon } from '../../assets';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: 'Julia William',
    contactNo: '+123 00-000-00',
    email: 'you@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    // Handle form submission logic here
  };

  return (
    <div className="py-20 px-4 ">
      <div className="w-full max-w-3xl mx-auto ">
        <h2 className="text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-semibold text-center text-gray-900">Contact our team</h2>
        <p className="text-sm md:text-base md:mt-2 xl:text-lg text-center text-gray-600">
          Need help or have a question? We're here for you.
        </p>
        
        <form onSubmit={handleSubmit} className=" bg-[#F3F7FC] mt-4 md:mt-8 space-y-6 max-w-3xl p-6 md:p-14 rounded-xl border border-gray-200">
          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-light ">
              Your message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full h-32 border p-3 border-gray-300 rounded-md focus:outline-none "
              placeholder="Type your message...."
            />
          </div>
          
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block font-light ">
                Your name*
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="mt-2 w-full p-3 border border-gray-300 font-light text-sm rounded-md focus:outline-none "
                placeholder="Enter your name"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNo" className="block font-light ">
                Contact No*
              </label>
              <input
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                type="text"
                className="mt-2 w-full p-3 border font-light text-sm border-gray-300 rounded-md focus:outline-none "
                placeholder="Enter your contact number"
              />
            </div>
            <div>
            <label htmlFor="email" className="block font-light ">
              Contact email *
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="mt-2 w-full p-3 border font-light text-sm border-gray-300 rounded-md focus:outline-none "
              placeholder="Enter your email"
            />
          </div>
          </div>

          {/* Email */}
          
         <p className="mt-6 text-left font-light">
          With this one-click submission, you would get access to our customer support team.
          Choose your preferred method and get started!
        </p>
          {/* Contact Us Button */}
          <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-fit bg-primary/90 text-white px-4 py-2 rounded-md hover:bg-primary transition duration-200"
          >
            Contact Us
          </button>
          </div>
        </form>

        

        {/* Contact Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex flex-col items-center text-center gap-2">
             <div className='bg-primary/10 p-2 rounded-xl'>
            <img src={ContactUsIcon.ContactusMail} alt="Email" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-600 mt-2">Customer Support: <span className='font-semibold'>
               support@Techween.com </span> </p>
               <p className="text-sm text-gray-600 mt-2">Sales & Business Inquiries: <span className='font-semibold'>
               hello@Techween.com </span> </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center gap-2">
            <div className='bg-primary/10 p-2 rounded-xl'>
            <img src={ContactUsIcon.ContactusPhone}  alt="Phone" className="w-5 h-5 " />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              For immediate assistance, call our customer support team for an impromptu response.
              <br />
              <span className='font-semibold'>
               +123 00-000-00 </span>
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center gap-2">
            <div className='bg-primary/10 p-2 rounded-xl'>
            <img src={ContactUsIcon.ContactusLocation} alt="Location" className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-600 mt-2 ">
              For friendly support, post your queries at <br />
              <strong>Techween Inc. [City, Province, Postal Code] KSA</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
