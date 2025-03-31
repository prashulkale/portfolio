'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './components/button';
import Nav from './components/nav';



const menu = {
    open: {
        width: "350px",
        height: "90vh",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
};

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`  fixed  right-[50px] top-[50px] z-50`}>
            <motion.div
                className="relative max-h-[680px]     bg-lime-300  rounded-[25px]"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive &&   <Nav isActived={setIsActive} />    }
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
        </div>
    );
}
















