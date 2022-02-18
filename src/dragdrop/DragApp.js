import React, { useRef} from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useViewportWidth } from "./useViewportWidth";
import "./styles.css";

/**
 * This is an example of a shared drag gesture in Framer Motion 2.
 *
 * When the box is dragged from one half to the other, it gets
 * removed from one component and added in the other. This isn't
 * the same box - it is two seperate components that share a layoutId.
 */

export default function DragApp() {
  const viewportWidth = useViewportWidth();
  const [activeHalf, setActiveHalf] = useState("a");
  const con = useRef()
  const onViewportBoxUpdate = ({ x }) => {
    const zoneViewport = viewportWidth.current / 3;
    console.log(ReactDOM.findDOMNode(con.current).querySelectorAll('.half-container .overlay')[2].getBoundingClientRect().left);
    if (x < zoneViewport) {
      setActiveHalf("a");
    } else if (zoneViewport < x && x< zoneViewport*2 ) {
      setActiveHalf("b");
    } else if (x > zoneViewport*2) {
      setActiveHalf("c");
    }
    console.log(con,'x :',x,"perZone",x < zoneViewport, zoneViewport < x  && x< zoneViewport*2,zoneViewport *2 < x);
  };

  return (
    <AnimateSharedLayout>
      <div className="container" ref={con} >
        <Zone
          color="#f107a3"
          isSelected={activeHalf === "a"}
          onViewportBoxUpdate={onViewportBoxUpdate}
        />
        <Zone
          color="#7b2ff7"
          isSelected={activeHalf === "b"}
          onViewportBoxUpdate={onViewportBoxUpdate}
        />
        <Zone
          color="#ff90f7"
          isSelected={activeHalf === "c"}
          onViewportBoxUpdate={onViewportBoxUpdate}
        />
      </div>
    </AnimateSharedLayout>
  );
}

function Zone({ color, isSelected, onViewportBoxUpdate }) {
    
  return (
    <div className="half-container" >
      <motion.div className="overlay" />
      {isSelected && (
        <motion.div
          className="box"
          layoutId="box"
          initial={false}
          animate={{ backgroundColor: color }}
          drag
          // Snap the box back to its center when we let go
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          // Allow full movememnt outside constraints
          dragElastic={1}
          onDragEnd={
            (event, info) =>  onViewportBoxUpdate(info.point)
          }
        />
      )}
    </div>
  );
}
