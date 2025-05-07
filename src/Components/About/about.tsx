"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from "../section-heading";

export default function Paragraph() {
  const paragraph = `I’m Prashant Kale, a Full Stack Developer passionate about building scalable web apps. With experience at Growlit Enterprises (frontend development) and Blinkit (data analysis), I combine technical skills with problem-solving. Proficient in React, Next.js, Node.js, and PostgreSQL, I’ve built projects like Ex-child (website builder) and Pan.Draw (real-time drawing tool) using Kafka, Redis, and WebSockets. A B.Tech (CSE) graduate and 100xDevs-certified developer, I thrive on turning ideas into efficient, user-friendly solutions. Let’s connect and create something impactful!`
  
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0"],
  });

  const words = paragraph.split(" ");
  return (
    <div  id="About" className="p-10 py-20 pb-[10vmax]  w-[100%]  translate-y-[-1rem]  flex flex-col   lg:justify-between  md:flex-row md:items-start bg-black text-white rounded-2xl">
      <SectionHeading>About</SectionHeading>
      <p 
        ref={container} 
        className="flex  flex-wrap  lg:w-[70vw]  text-[1.2rem] lg:text-[2rem] leading-[0.5] lg:leading-[0.9]  text-center  md:text-ellipsis md:text-[1.6rem] md:leading-normal"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children!.length;
  return (
    <span className="  sticky mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};