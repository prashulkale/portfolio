"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import img from "@/app/herogbll.png"
// import { Button } from "./ui/button";
import Cv from "../Nav/components/Cv";




export const slideUp: Variants = {
  initial: { y: 0 },
  enter: { y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 } },
};

export default function Landing() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const xPercentRef = useRef<number>(0); 
  const directionRef = useRef<number>(-3); 
  const animationFrameId = useRef<number | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!slider.current || !firstText.current || !secondText.current || !mainRef.current) {
      return;
    }

    const firstTextWidth = firstText.current.getBoundingClientRect().width || 0;
    gsap.set(secondText.current, { left: firstTextWidth });

    const tl = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        scrub: 0.45,
        start: "top top",
        end: "bottom top",
        onUpdate: (e) => (directionRef.current = e.direction * -3),
      },
      x: "-500px",
    });

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      tl.kill();
    };
  }, []);

  const animate = () => {
    if (!firstText.current || !secondText.current) {
      return;
    }

    if (xPercentRef.current < -100) {
      xPercentRef.current = 0;
    } else if (xPercentRef.current > 0) {
      xPercentRef.current = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercentRef.current });
    gsap.set(secondText.current, { xPercent: xPercentRef.current });
    xPercentRef.current += 0.1 * directionRef.current;

    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (





 <>
    
    <div 
    className='w-full h-[95vmax]  relative flex  justify-center   '
 
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
  >
    <div className='fixed  z-10   w-[100vw] top-0 h-[100vh]'>
      
    <div  className="flex   flex-col items-center bg-black "  >


    <motion.main
      ref={mainRef}
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative w-[100vw]  flex flex-col  h-[100vh]  bg-red-300"
    >

      <div className="w-full  h-screen relative    bg-red-300  md:bg-red-400/80">
        <div style={{fontFamily : "Voyage Medium"}} ref={slider} className="relative  h-[70vh] lg:h-[100vh]    flex  items-center  whitespace-nowrap">
          <h1
            ref={firstText}
            className=" inline-block    text-[25vmax] "
          >
            Prashant Kale —
          </h1>{" "}
          <h1

            ref={secondText}
            className="inline-block   text-[25vmax]   "
          >
          Prashant Kale —
          </h1> {" "}
         

          
        </div>
      </div>


     


<div className="relative flex justify-center z-10 w-full  mx-auto">
                <Image
                  className="absolute object-contain  h-[80vmax] md:h-[60vmax]      bottom-[-10vmax]"
                  src={img}
                  alt="heroImg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 75vw"
                />
              </div>
            <div className="absolute bottom-10 right-10">

              <Cv/>

            </div>

    </motion.main>
 
     </div>
    </div>
  </div>

    
    {/* <Btn/> */}
    </>










  );
}