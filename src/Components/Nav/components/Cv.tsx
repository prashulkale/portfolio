import React from 'react'
import { HiDownload } from 'react-icons/hi'

const Cv = () => {
  return (
    <div>
        
        <a
          className="group z-10  bg-lime-300 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Prashant resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
    </div>
  )
}

export default Cv