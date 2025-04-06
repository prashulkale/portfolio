import { motion } from 'framer-motion';



export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65, 
            delay: 0.5 + (i * 0.1), 
            ease: [.215,.61,.355,1],
            opacity: { duration: 0.35}
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
    }
}

export const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i :number) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1), 
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut"}
    }
}

export const links = [
    {
        title: "Projects",
        href: "#Projects"
    },
    {
        title: "About",
        href: "#About"
    },
    {
        title: "Skills",
        href: "#Skills"
    },
    {
        title: "Experience",
        href: "#Experience"
    },
    {
        title: "Contact",
        href: "#Footer"
    },
   
]

export const footerLinks = [
   
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/prashant--kale/"
    },
  
    {
        title: "Twitter",
        href: "https://x.com/prashul_k_twt"
    }, {
      title: "DownloadCV",
      href:"/PRASHANT Resume.pdf"
  }
]
















export default function Nav({isActived}:{isActived: (value: boolean)=>void}) {
  return (
    <div className="flex flex-col justify-between p-[100px_40px_50px_40px] h-full box-border">
      <div className="flex flex-col gap-2.5"> {/* gap-[10px] converted to gap-2.5 */}

        
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div 
              key={`b_${i}`} 
              className="relative" 
              style={{
                perspective: '120px',
                perspectiveOrigin: 'bottom'
              }}
            >
              <div className='overflow:hidden'>

              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
           
              >
                <a 
                  href={href} 
                
                  onClick={() => isActived(false)}
                  className="no-underline text-black text-5xl leading-none" /* text-[46px] converted to text-5xl */
                >
                  {title}
                </a>
              </motion.div>
              </div>
            </div>
          )
        })}


      </div>
      
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              href={href}
              key={`f_${i}`}
              target="_blank" 
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              className="basis-1/2 mt-1" /* w-1/2 converted to basis-1/2, mt-[5px] to mt-1 */
            >
              {title}
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}