"use client"
import React from 'react';
import SectionHeading from './section-heading'
import { projectsData } from "../data/data"
import Project from './project';
import { useSectionInView } from '../hooks/hooks'

const Projects = () => {
 
  const { ref } = useSectionInView('Projects', 0.5);


  return (
      <section ref={ref} id='projects' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    );
  };
  
  

export default Projects