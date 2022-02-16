import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box3() {
    const [isAnimating, setIsAnimating] = useState(false);
    const boxVariant = {
      enter:{
        x: 0,
        transition:{
          delay:0.5,
          when:"beforeChildren",
          staggerChildren: 0.2
        }
      },
      hidden:{
        x: "-100vw"
      },

    }

    const listVariant ={
      hidden:{
        x:10,
        opacity:0

      },
      enter:{
        x: 0,
        opacity: 1,
      }

    }
  return (
    <div className='box-container'>
        <motion.div 
          className='box'
          variants={boxVariant}
          initial="hidden"
          animate="enter"
        >
          {[1,2,3].map(box=>{
            return <motion.li 
            variants={listVariant}
            className='boxItem' 
            />
          })}
        </motion.div>
    </div>
  )
}

export default Box3