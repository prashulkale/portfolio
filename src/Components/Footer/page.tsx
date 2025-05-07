import React from 'react'
import Btn from "@/Components/Footer/StickFooter/page"

const Footer = () => {




  

  return (
    <>
    
    <div 
    className='w-full h-[800px] relative flex  justify-center   '
    id='Footer'
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
  >
    <div className='fixed  z-10   w-[90vw] bottom-0 h-[100vh]'>
      
    <div  className="flex flex-col items-center  bg-inherit"  >


    <Btn/>
     </div>
    </div>
  </div>

    
    {/* <Btn/> */}
    </>
  )
}



export default Footer