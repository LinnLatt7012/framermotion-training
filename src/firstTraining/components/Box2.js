import React from 'react'
import { motion } from 'framer-motion'

function Box2() {
  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        whileHover={{
            scale: 1.1
        }}
        whileTap={{
            scale: 0.8
        }}
        drag
        dragConstraints={{
            right: 20,
            left: -20,
            top: 10,
            bottom: 10,
        }}
        />
    </div>
  )
}

export default Box2