'use client';

import {motion} from 'framer-motion'
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity:1, transition: {delay:1.5, duration:0.4, ease:'easeIn'}}}
      >
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity:1, transition: {delay:1.7, duration:0.4, ease:'easeInOut'}}}
        >
        <div className='w-[298px] h-[298px] md:w-[498px] md:h-[498px] bg-sky-600 rounded-full '>
            <Image src="/assets/photo.png" priority quality={100} fill alt='me as a drawn' className='object-contain rounded-full  ' />
        </div>

        </motion.div>
        
       </motion.div>
    </div>
  )
}

export default Photo
