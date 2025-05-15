import React from "react";
import * as motion from "motion/react-client"
import { useSpring, useScroll, color } from "motion/react"
import { TypeAnimation } from 'react-type-animation';

// import about from "../assets/img/about.jpg";

const Intro = () => {

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="container">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#609ca4",
                }}
            />

            <h1>Intro</h1>
            <div style={{ paddingTop: "150px" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 1, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 2 },
                    }}
                    style={{}}
                ><h1 style={{ fontSize: "150px", color: "#609ca4" }}>Hi! I'm Alex Lee</h1></motion.div>
                <h1 id="subtitle" style={{ color: "#99a9af" }}>Turning data into insights</h1>
            </div>
        </div >
    );
};
export default Intro;