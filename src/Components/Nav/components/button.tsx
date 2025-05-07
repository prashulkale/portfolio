import { motion } from 'framer-motion';

export default function Button({ isActive, toggleMenu } :{isActive: boolean , toggleMenu : () => void}) {
  return (
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden">
      <motion.div 
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div 
          className="w-full h-full bg-[#c9fd74] flex items-center justify-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div 
          className="w-full h-full bg-black flex items-center justify-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Close" textColor="text-[#c9fd74]" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label = "", textColor = "text-black" }) {
  return (    
    <div className="flex flex-col items-center justify-center h-full w-full transform-style-preserve-3d transition-transform duration-75 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-x-90">
      <p className={`m-0 uppercase transition-all duration-75 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${textColor} group-hover:-translate-y-full group-hover:opacity-0`}>
        {label}
      </p>
      <p className={`m-0 uppercase transition-all duration-75 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none absolute transform-origin-bottom-center rotate-x-[-90deg] translate-y-[9px] opacity-0 ${textColor} group-hover:opacity-100`}>
        {label}
      </p>
    </div>
  );
}