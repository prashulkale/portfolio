    "use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full h-[100vh] flex  flex-col  justify-between bg-white text-black text-center py-8 border-t">
        <div className="heroName  mt-40 lg:mt-0">
      
        <h1    style={{ fontFamily: "Voyage Regular" }}   className="  m-auto text-[3rem] lg:text-[9rem]  w-fit border-1 border-black  px-8  rounded-lg" >PRASHANT KALE</h1>
        </div>


      <div className="   lg:flex    w-[90vw] justify-between   items-start  mx-auto">
        <div className="flex flex-col items-start">


        <p className="text-3xl  font-semibold mb-5">
          <span className="text-black p-2 rounded-2xl bg-[#c9fd74]">Local time</span> —
          <span className="font-bold text-gray-600 "> {time}</span>
        </p>
        <h3 className="text-2xl lg:text-4xl  flex   capitalize ">
        Reach out using This  Media  Links {"->"}
        </h3>
        </div>

        <div className="  mt-[10vmax] lg:mt-0  lg:w-[40vw] grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
          <a
            href="https://instagram.com/affordable_prashant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border  border-black p-3 rounded-lg hover:bg-gray-100"
          >
            Instagram <FaInstagram />
          </a>

          <a
            href="https://github.com/prashulkale"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-black p-3 rounded-lg hover:bg-gray-100"
          >
            Github <SiGithub />
          </a>
        
          <Link
          href="mailto:prashulkale@gmail.com"
          className="flex items-center justify-between border border-black p-3 rounded-lg hover:bg-gray-100"
          onClick={() => {
           
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>


          <a
            href="https://x.com/prashul_k_twt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-black p-3 rounded-lg hover:bg-gray-100"
          >
            Twitter <FaTwitter />
          </a>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        © 2025 PRASHANT KALE. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
