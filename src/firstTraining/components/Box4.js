import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box4() {
    const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className='box-container'>
        <motion.div 
        onClick={()=>setIsAnimating(!isAnimating)}
        className='box'
        />
    </div>
  )
}

export default Box4