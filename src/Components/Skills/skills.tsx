import React, { useState, useEffect, useRef } from "react";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiTurborepo,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiWebrtc,
  SiApachekafka,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaNode, FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { FrontendBackendSkills, ToolsDbCoreSkills } from "./page";
// import Magnetic from "../Magnetic/page";

export const skills = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiReact />, name: "React" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiTurborepo />, name: "Turborepo" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiWebrtc />, name: "WebRTC" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <DiRedis />, name: "Redis" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "K8s" },
  { icon: <SiGithubactions />, name: "GitHub Actions" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
];

const SplitHeader = () => {
  const [leftWidth, setLeftWidth] = useState(60); // Default 60% width
  const leftSide = useRef(null);

  const handleMove = (clientX :number) => {
    const percentage = (clientX / window.innerWidth) * 100;
    // Constrain between 0% and 100%
    const constrainedPercentage = Math.max(0, Math.min(100, percentage));
    setLeftWidth(constrainedPercentage);
  };

  useEffect(() => {
    const handleMouseMove = (e :MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e :TouchEvent) => handleMove(e.touches[0].clientX);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full  h-[120vh]  overflow-hidden bg-gray-900">
      {/* Left Side */}
      <div
        ref={leftSide}
        id="Skills"
        className="grid will-change-transform transform-content  py-10 h-full place-items-start absolute  overflow-hidden z-2 bg-gray-900"
        style={{ width: `${leftWidth}%` }}
      >
        <h2 className="text-white text-4xl md:text-7xl px-[5vw] font-extrabold w-[80vw]">
          Designing Tomorrow’s Web,
          <span
            style={{ fontFamily: "Voyage Bold" }}
            className="text-lime-300 text-[1.8em] leading-[1.5em]"
          >
            Today
          </span>
        </h2>
        <div className="w-[100vw] px-[5vw] flex justify-start items-end ">
        <FrontendBackendSkills/>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid  py-10 h-full place-items-start absolute w-[100vw]  bg-lime-300">
        <h2 className="text-gray-900 text-4xl md:text-7xl font-extrabold mx-[5vw] w-[80vw]">
          Designing Tomorrow’s Web,
          <span
            style={{ fontFamily: "Voyage Bold" }}
            className="text-white text-stroke-black text-[1.8em] leading-[1.5em]"
          >
            Better
          </span>
        </h2>
     



  <div className="w-[100vw] px-[5vw] flex justify-end items-end ">

  <ToolsDbCoreSkills/>
        </div>





        
      </div>
    </div>
  );
};

export default SplitHeader;
