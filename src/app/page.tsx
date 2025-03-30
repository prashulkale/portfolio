

"use client";

import { useEffect, useState } from "react";
import Dynamic from "@/Components/Dynamic/page";
import styles from "@/components/styles.module.scss";
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
          style={{ fontFamily: "Voyage Regular" }}
          className={` lg:flex-row   text-[25vw]   lg:text-[12vw]  ${styles.loading}  `}
        >
        
          <span> Prashant</span> <span> Kale </span>
        </div>
      )}
    </>
  );
}
