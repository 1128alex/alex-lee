import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import * as motion from "motion/react-client"
import { useSpring, useScroll } from "motion/react"
import about from "../assets/img/about.jpg";

const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hello World! I am a Data Science Student at University of Waterloo. Welcome to my space!"],
            typeSpeed: 50,
            loop: false,
            loopCount: 0,
            cursorChar: "|",
            whiteSpace: "pre",
        });
        return () => {
            typed.destroy();
        };
    }, []);

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
            <h1 id="code">
                <span ref={el} />
            </h1>
            <div id="container"></div>
        </div>
    );
};

export default Intro;