"use client"
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion'
import { useSectionInView } from '../hooks/hooks';
import { sendEmail } from '../actions/email'

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await sendEmail(formData);
    setMessage(response.message);
    setMessageColor(response.success ? 'green' : 'red');
  };

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:joaquinlgerez@gmail.com'>
          joaquinlgerez@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              name='senderEmail'
              type='email'
              autoComplete='email'
              maxLength={500}
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
            />
          </div>
          <div>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              maxLength={500}
              className='appearance-none rounded-none relative block w-full px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Message'
              required
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='group relative flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            Send
            <svg
              className='h-5 w-5 ml-2 text-gray-500 group-hover:text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M22 2L11 13'></path>
              <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
            </svg>
          </button>
        </div>
      </form>
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </motion.section>
  );
};

export default Contact;
