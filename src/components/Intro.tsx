import React from "react";
import * as motion from "motion/react-client"

const Intro = () => {
    return (
        <div id="intro">
            <div style={{ paddingTop: "270px", paddingLeft: "5%" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 1, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 2 },
                    }}
                    style={{}}
                >
                    <h1 style={{ fontSize: "800%", color: "#609ca4" }}>Alex Lee</h1>
                    <h1 id="subtitle" style={{ color: "#99a9af" }}>Student of University of Waterloo studying Data Science.</h1>
                    <h1 id="subtitle" style={{ color: "#99a9af" }}>Welcome to my space!</h1>
                </motion.div>
            </div>
        </div >
    );
};
export default Intro;