import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

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
    return (
        <div>
            <h1>Intro</h1>
            <h1>
                {" "}
                Hello, <span ref={el} />{" "}
            </h1>
        </div>
    );
};

export default Intro;