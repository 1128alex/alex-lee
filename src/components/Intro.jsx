import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import * as motion from "motion/react-client"
import { useSpring, useScroll } from "motion/react"

const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I'm a Fullstack Software Developer"],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|"
        });
        return () => {
            typed.destroy();
        };
    }, []);
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
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
            <h1>
                {" "}
                Hello, <span ref={el} />{" "}
            </h1>
            <div id="container"></div>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 5,
                }}
            />
        </div>
    );
};

export default Intro;