import React from 'react'
import SectionHeading from './section-heading'

const contact = () => {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>

        <SectionHeading>Contact me</SectionHeading>
        <p>Please contact me directly at <a className='underline' href='mailto:joaquinlgerez@gmail.com'>joaquinlgerez@gmail.com</a>{" "}
        or through this form.
        </p>

        <form>
          
        </form>
    </section>
  )
}

export default contact