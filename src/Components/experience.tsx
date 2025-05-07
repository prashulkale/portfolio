
// https://portfolio-prashulkales.vercel.app/

"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./section-heading";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  altText: string;
  color: string;
  links: {
    label: string;
    url: string;
    icon: React.ReactElement ;
  }[];
  layout: 'left' | 'right';
  description?: string;
  tags?: string[];
}

interface Experience {
  id: number;
  title: string;
  imageUrl: string;
  altText: string;
  color: string;
  description: string;
  tags: string[];
  layout: 'left' | 'right';

}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Exelidraw Clone", 
    imageUrl: "/excalidraw.png",
    altText: "Exelidraw project",
    color: "#EC533B",
    layout: 'left',
    links: [
      {
        label: "Demo",
        url: "https://github.com/prashulkale",
        icon: <FaExternalLinkAlt />
      },
      {
        label: "Code",
        url: "https://github.com",
        icon: <FaGithub />
      }
    ]
  },
  {
    id: 2,
    title: "Tension  (Notion Clone)",
    imageUrl: "/Tension.png",
    altText: "Tension project",
    color: "#900c3e",
    layout: 'right',
    links: [
      {
        label: "Live",
        url: "https://tension-prashulkales-projects.vercel.app/",
        icon: <FaExternalLinkAlt />
      },
      {
        label: "Code",
        url: "https://github.com/prashulkale/Tension/",
        icon: <FaGithub />
      }
    ]
  },
];

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Growlit Enterprises",
    imageUrl: "/growlit.png",
    altText: "Watermelon experience",
    color: "#003B49",
    description: "BRANDING + AUDIT + WEBSITE",
    layout: 'left',
    tags: ["backend-dev", "Audit", "Web Design"]

  },
  {
    id: 2,
    title: "Intern (BlinkIt)",
    imageUrl: "/Blinkit.png",
    altText: "Blinkit experience",
    color: "#FFC72C",
    description: "ANALYIST  + DARK.STORE + 2 Months",
    layout: 'right',
    tags: ["Branding", "UI/UX", "Development"]

  }
];

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }: { 
  project: Project, 
  onMouseEnter: (color: string) => void, 
  onMouseLeave: () => void 
}) => {
  return (
    <div className={`drop-shadow-sm sections py-10 flex flex-col items-center  justify-center px-10 mt-12 md:mt-14 lg:mt-16 ${project.layout === 'right' ? 'lg:items-end' : 'lg:items-start'}`}>
      <div
        className="box w-[80vw] md:w-[60vw] lg:w-[50vw] h-[30vmax] rounded flex items-center justify-center bg-gray-200 cursor-pointer overflow-hidden  "
        data-color={project.color}
        onMouseEnter={() => onMouseEnter(project.color)}
        onMouseLeave={onMouseLeave}
        
      >
        <div className="  relative image w-[80%] h-[75%]  border  border-black overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.altText}
            fill
            className="  object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <div className="text w-[80vw] lg:w-[50vw]">
        <div className="textblock flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold py-5">
            {project.title}
          </h1>
          <div className=" bg-gray-600 w-full h-[1px] mb-3" />
          <div className="w-[100%]  flex flex-row-reverse justify-between items-center font-mono font-medium">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:w-[25%] w-[40%] flex items-center border justify-between  p-3 rounded-lg hover:bg-gray-200"
              >
                {link.label} {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, onMouseEnter, onMouseLeave }: { 
  experience: Experience, 
  onMouseEnter: (color: string) => void, 
  onMouseLeave: () => void 
}) => {
  return (

<div className={`sections flex flex-col items-center   justify-center px-10 mt-12 md:mt-14 lg:mt-16 ${experience.layout === 'right' ? 'lg:items-end' : 'lg:items-start'}`}>
 
      <div
        className="box w-[40vmax] cursor-pointer border border-black  flex flex-col justify-center items-center rounded-[5%] overflow-hidden"
        data-color={experience.color}
        onMouseEnter={() => onMouseEnter(experience.color )  }
        onMouseLeave={onMouseLeave}
      >
        <div className="  relative image w-full  max-w-[600px] h-[200px] md:h-[250px] lg:h-[350px] rounded-[5%] overflow-hidden">
          <Image
            src={experience.imageUrl}
            alt={experience.altText}
            fill
            className=" rounded-[5%] object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
          />



          
        </div>
        <div className="text p-5">
          <div className="textblock flex flex-col">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold py-2">
              {experience.title}
            </h2>
            <h6 className="font-mono text-xs md:text-sm lg:text-base font-medium text-gray-500 tracking-wider py-1">
              {experience.description}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState("black");

  return (
    <div
      id="Projects"
      className="w-[100%] p-5 py-20 md:px-10 transition-colors duration-400 ease-in-out will-change-[background-color]"
      style={{ backgroundColor, color  }}
    >
      <SectionHeading>Projects</SectionHeading>
      
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onMouseEnter={(color) =>{ setBackgroundColor(color); setColor('#ffff') }}
          onMouseLeave={() =>{ setBackgroundColor("#ffffff") ;  setColor('black')}}
        />
      ))}



  <div
  id="Experience"
  className="scroll-mt-20 border   mt-12  rounded-2xl  border-black"
  >

      <SectionHeading>Experience</SectionHeading>

  </div>
      
      {experienceData.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          onMouseEnter={(color) =>{ setBackgroundColor(color); setColor('#ffff') }}
          onMouseLeave={() =>{ setBackgroundColor("#ffffff") ;  setColor('black')}}
     />
      ))}
    </div>
  );
};

export default SectionComponent;