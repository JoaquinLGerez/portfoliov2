import React from 'react';
import SectionHeading from './section-heading';

const Contact = () => {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:joaquinlgerez@gmail.com'>
          joaquinlgerez@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form className='mt-8 space-y-6'>
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              autoComplete='name'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Name'
            />
          </div>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Message'
              required
            />
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <svg
                className='h-5 w-5 text-gray-500 group-hover:text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 1.414L4.414 11H15a1 1 0 110 2H4.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
