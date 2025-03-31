// "use client";

// import { useEffect, useState, useRef } from "react";
// import Preloader from "@/Components/supense";
// import { AnimatePresence } from "framer-motion";
// import HomePage from "@/Components/Home/page";
// import Paragraph from "@/Components/About/about";
// import Footer from "@/Components/Footer/page";
// import Projects from "@/Components/experience";
// import MouseTag from "@/Components/Skills/skills";
// // import Skil from "@/Components/Skills/page";
// import Header from "@/Components/Nav/index";
// import  {LocomotiveScroll } from "locomotive-scroll";
// // import type { LocomotiveScroll as LocomotiveScrollType } from "locomotive-scroll"; 

// export default function Dynamic() {
//   const [isLoading, setIsLoading] = useState(true);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const locomotiveScrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let scrollInstance ;

//     const initLocomotiveScroll = async () => {
//       try {
//         const LocomotiveScroll = (await import("locomotive-scroll")).default;
//         scrollInstance = new LocomotiveScroll({
//           el: scrollContainerRef.current,
//           smooth: true,
//           smartphone: {
//             smooth: true,
//           },
//           tablet: {
//             smooth: true,
//           },
//           reloadOnContextChange: true, // This handles most content updates automatically
//         });

//         locomotiveScrollRef.current = scrollInstance;

//         // Handle content updates properly
//         const handleContentChange = () => {
//           scrollInstance?.start();
//           scrollInstance?.scrollTo(0, { duration: 0 });
//         };

//         window.addEventListener("load", handleContentChange);

//         return () => {
//           window.removeEventListener("load", handleContentChange);
//         };
//       } catch (error) {
//         console.error("Failed to initialize Locomotive Scroll:", error);
//       }
//     };

//     const loadApp = async () => {
//       await initLocomotiveScroll();

//       // Minimum display time for better UX
//       const minLoadTime = 1000;
//       const startTime = performance.now();

//       const handleLoadComplete = () => {
//         const elapsed = performance.now() - startTime;
//         const remainingTime = Math.max(0, minLoadTime - elapsed);

//         setTimeout(() => {
//           setIsLoading(false);
//           document.body.style.cursor = "default";

//           // Reset scroll position
//           locomotiveScrollRef.current?.scrollTo(0, { duration: 0 }); 

//           // Start the scroll instance if it's not already running
//           locomotiveScrollRef.current?.start();
//         }, remainingTime);
//       };

//       handleLoadComplete();
//     };

//     loadApp();

//     return () => {
//       locomotiveScrollRef.current?.destroy();
//     };
//   }, []);

//   return (
//     <div ref={scrollContainerRef} data-scroll-container>
//       <main className=" flex flex-col items-center">
//         <AnimatePresence mode="wait">
//           {isLoading && <Preloader />}
//         </AnimatePresence>

//         {!isLoading && (
//           <>
//             <nav className="">
//               <Header />
//             </nav>

//             <HomePage data-scroll-section />
//             <Paragraph data-scroll-section />
//             <Projects data-scroll-section />

         
            
//               <MouseTag />
          

//             <Footer data-scroll-section />
//           </>
//         )}
//       </main>
//     </div>
//   );
// }


























"use client";

import { useEffect, useState, useRef } from "react";
import Preloader from "@/Components/supense";
import { AnimatePresence } from "framer-motion";
import HomePage from "@/Components/Home/page";
import Paragraph from "@/Components/About/about";
import Footer from "@/Components/Footer/page";
import Projects from "@/Components/experience";
import MouseTag from "@/Components/Skills/skills";
import Header from "@/Components/Nav/index";

export default function Dynamic() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   

 
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
 
        }, 1600);
      

   
    

    

   
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      <main className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <nav className="">
              <Header />
            </nav>

            <HomePage data-scroll-section />
            <Paragraph data-scroll-section />
            <Projects data-scroll-section />
            <MouseTag />
            <Footer data-scroll-section />
          </>
        )}
      </main>
    </div>
  );
}