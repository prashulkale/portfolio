// "use client"
// import React, { forwardRef, useEffect, useState } from "react";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiNextdotjs,
//   SiReact,
//   SiExpress,
//   SiTurborepo,
//   SiHtml5,
//   SiTailwindcss,
//   SiRedux,
//   SiWebrtc,
//   SiApachekafka,
//   SiPrisma,
//   SiPostgresql,
//   SiMongodb,
//   SiDocker,
//   SiKubernetes,
//   SiGithubactions,
//   SiGithub,
//   SiPostman,
// } from "react-icons/si";
// import { FaNode, FaAws } from "react-icons/fa";
// import { DiRedis } from "react-icons/di";
// import Link from "next/link";
// import { Button } from "../ui/button";
// // import Magnetic from "../Magnetic/page";
 
// export   const skills = [
//   { icon: <SiJavascript />, name: "JavaScript" },
//   { icon: <SiTypescript />, name: "TypeScript" },
//   { icon: <SiNextdotjs />, name: "Next.js" },
//   { icon: <SiReact />, name: "React" },
//   { icon: <FaNode />, name: "Node.js" },
//   { icon: <SiExpress />, name: "Express" },
//   { icon: <SiTurborepo />, name: "Turborepo" },
//   { icon: <SiHtml5 />, name: "HTML5" },
//   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//   { icon: <SiRedux />, name: "Redux" },
//   { icon: <SiWebrtc />, name: "WebRTC" },
//   { icon: <SiApachekafka />, name: "Kafka" },
//   { icon: <DiRedis />, name: "Redis" },
//   { icon: <SiPrisma />, name: "Prisma" },
//   { icon: <SiPostgresql />, name: "PostgreSQL" },
//   { icon: <SiMongodb />, name: "MongoDB" },
//   { icon: <SiDocker />, name: "Docker" },
//   { icon: <SiKubernetes />, name: "Kubernetes" },
//   { icon: <SiGithubactions />, name: "GitHub Actions" },
//   { icon: <FaAws />, name: "AWS" },
//   { icon: <SiGithub />, name: "GitHub" },
//   { icon: <SiPostman />, name: "Postman" },
// ];

// const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    


//   return (
//     <div ref={ref}  className="min-h-[90vh] pb-4   w-full bg-[#1c1d20] md:px-28 flex flex-col pt-16 md:pt-20 justify-between gap-12">
//       <div className="flex flex-col md:flex-row pb-4 gap-16 md:gap-0">
//         <div className="flex-[0.4] px-6 flex justify-between items-center md:flex-col md:items-center md:justify-start md:gap-16">
//           <div className="flex justify-start w-fit md:w-full md:pl-8">
//             {/* About Me Button */}
//             <div data-scroll data-scroll-speed="0.1" className="">
//               {/* <Magnetic> */}
//                 <div className="w-50 h-16 border border-white text-white text-xl rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden hover:text-white">
//                     <p>Skills</p>
//                 </div>
//               {/* </Magnetic> */}
//             </div>
//           </div>
//           <div className="flex justify-center ">
//             <div className="text-white text-[38px] md:text-7xl font-normal">
//             {"Let's work"} <br /> together
//             </div>
//           </div>
//         </div>
//         <div className="flex-[0.6] flex items-center justify-center w-full md:w-[inherit] px-8">
//           <div className="grid w-full text-white md:w-[inherit] grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-4 md:grid-cols-6 md:gap-6 ">

//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="group relative flex flex-col items-center justify-center border border-white p-4 rounded-lg hover:bg-[#144fff] hover:text-black transition duration-300"
//               >
//                 <div className="text-2xl md:text-4xl">{skill.icon}</div>
//                 <span className="absolute z-20 top-full mt-2 px-2 py-1 bg-zinc-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300">
//                   {skill.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
     
//     </div>
//   );
// });

// Skills.displayName = "Skills";

// export default Skills;








// import FrontendBackendSkills from './FrontendBackendSkills';
// import ToolsDbCoreSkills from './ToolsDbCoreSkills';

export default function SkillsSection() {
  return (
    <section className="py-12  px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Technical Skills
      </h2>
      
      <div className="  ">
        <FrontendBackendSkills />
        <ToolsDbCoreSkills />
      </div>
    </section>
  );
}







export function FrontendBackendSkills() {
  return (
    <div className="bg-white/10   md:w-full h-[80vmax] backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="space-y-8">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-lime-400 flex items-center">
            <span className="w-3 h-3 bg-lime-400 rounded-full mr-2"></span>
            Frontend Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'Redux', 'Recoil'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-lime-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-400 flex items-center">
            <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {['NodeJS', 'ExpressJS', 'Redis', 'Kafka', 'GraphQL', 'Mongoose', 'Prisma'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-amber-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* devops Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-400 flex items-center">
            <span className="w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
            Devops 
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Digital Ocean', "K8s", "Docker", "Github", "Vercel"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-amber-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




export  function ToolsDbCoreSkills() {
  return (
    <div className=" md:w-[60vw] h-[80vmax] bg-gray-900 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="space-y-8">
        {/* Databases */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center">
            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
            Databases
          </h3>
          <div className="flex flex-wrap gap-3">
            {[ 'DBMS', 'MongoDB', 'PostgreSQL'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-blue-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
            <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
            Tools & Software
          </h3>
          <div className="flex flex-wrap gap-3">
            {[ 'Postman', 'Webpack',  'VS Code'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-purple-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Core Subjects */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-400 flex items-center">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
            Core Subjects
          </h3>
          <div className="flex flex-wrap gap-3">
            {['DSA', 'OOPs', 'CI/CD', 'SDLC', 'OS','System Design'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-red-400 hover:text-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}












































