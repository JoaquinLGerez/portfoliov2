"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../data/data'
import { useSectionInView } from '../hooks/hooks'

export default function experience() {
    const { ref } = useSectionInView('Experience', 0.5);

  return (
    <section ref={ref} id='experience' className="mb-28 
    max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>My experience</SectionHeading>

        <VerticalTimeline lineColor="" >
            {experiencesData.map((exp, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement   
                        visible 
                        contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0,0,0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af",
                        }}
                        iconStyle={{
                            background: "white", fontSize:"1.5rem"
                        }}
                        date={exp.date}
                        icon={exp.icon}

                    >
                        <h3 className='font-semibold capitalize'>{exp.title}</h3>
                        <p className='font-normal !mt-0'>{exp.location}</p>
                        <p className='!mt-1 !font-normal text-gray-700'>{exp.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
                ))}
        </VerticalTimeline>
    </section>
  )
}
