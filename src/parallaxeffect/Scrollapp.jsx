import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
import React, { useEffect } from 'react'

const Scrollapp = () => {
    const { scrollY } =useViewportScroll();
    const x = useMotionValue(0)
    useEffect(() => x.onChange(latest => {console.log(latest)}), [])
    const GetY = (speed=1) =>{
        return useTransform(scrollY, value => value/ speed);
    } 
    
  return (
    <div style={{height: 4000}} >
        <motion.div drag style={{y: GetY(-5),position:'relative', top: 20, marginLeft: "20%"}}  >
            <motion.img drag src="https://designshack.net/wp-content/uploads/portfolio-matt.jpg"  alt="" style={{width:500, height: 500,x}} />
        </motion.div>
        <motion.div style={{y: GetY(2), position:'absolute', top: 20, marginLeft: "70%"}} >
            <img src="https://designshack.net/wp-content/uploads/portfolio-matt.jpg"  alt="" style={{width:100, height: 500}} />
        </motion.div>
    </div>
  )
}

export default Scrollapp