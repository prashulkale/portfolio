

"use client";

import { useEffect, useState } from "react";
import Dynamic from "@/Components/Dynamic/page";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);



 
  // Simulate a delay for loading dynamic content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 10); //

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {!isLoading ? (
        <Dynamic />
      ) : (
        <div
        // style={{ fontFamily: "Voyage Regular" }}
        // style={{ fontFamily: 'var(--font-voyage-regular) !important' }}
        className={` w-screen h-screen absolute top-0 z-[99999] bg-black flex flex-col  justify-center items-center text-[25vw] lg:text-[14vw] text-[#c9c9c9] leading-[20vw]`}
      >
        <h1>Prashant </h1> 
        <span>Kale</span>
      </div>
      )}
    </>
  );
}
