"use client"
import React from 'react';
import SectionHeading from './section-heading'
import { projectsData } from "../data/data"
import Project from './project';


const Projects = () => {
    return (
      <section>
        <SectionHeading>Projects</SectionHeading>
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