import React from 'react'
import { motion } from 'framer-motion'

function Box4() {
  return (
    <div className='box-container'>
        <motion.div 
          className='box'
          animate={{
            scale:[1, 1.4, 1.4, 1.1, 1],
            rotate:[0,360,0,-270, 0],
            borderRadius:["20%","20%","50%","50%","20%"],
            x:[0,20,0]
          }}
          transition={{
            duration:2
          }}
        />
    </div>
  )
}

export default Box4