import React from "react";
import * as motion from "motion/react-client"
import { useSpring, useScroll } from "motion/react"
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
        <div>
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
                    backgroundColor: "#EDF4F2",
                }}
            />

            <h1>Intro</h1>
            <div style={{ paddingTop: "150px" }}>
                <h1 id="code">
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                        sequence={[
                            'Hello World! I\'m Alex Lee',
                            1000,
                        ]}
                        repeat={0}
                        speed={70}
                    />
                </h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    style={{}}
                ><h1>Hi! I'm Alex Lee</h1></motion.div>

            </div>
        </div >
    );
};
export default Intro;