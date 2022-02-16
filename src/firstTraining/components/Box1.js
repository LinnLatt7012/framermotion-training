import React, { useState } from 'react'
import { motion } from 'framer-motion'
function Box1() {
    const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className='box-container'>
        <motion.div 
        onClick={()=>setIsAnimating(!isAnimating)}
        className='box'
        initial={{
            opacity:0.5
        }}
        animate={{
            x: isAnimating?  [0, 500, 1200]: 0,
            rotate:isAnimating? 360: 0,
            opacity:  isAnimating? 1 : 0.5
        }}
        transition={{
            type:'spring',
            stiffness: 60,
        }}
        />
    </div>
  )
}

export default Box1