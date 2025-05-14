import React from "react";
import about from "../assets/img/about.jpg";

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "70%", float: "left" }}>
                    <p>
                        Hi! I'm Alex Lee, a software engineer based in Toronto, Canada. I am currently a student at the University of Waterloo, pursuing a degree in Computer Science. I have a passion for technology and love to learn new things. In my free time, I enjoy reading books, playing video games, and exploring the outdoors.
                    </p>
                    <p>
                        I have experience in various programming languages and frameworks, including JavaScript, Python, React, and Node.js. I am always looking for new challenges and opportunities to grow my skills.
                    </p>
                </div>
                <div style={{ width: "30%", float: "left" }}>
                    {/* <img src={about} alt="" /> */}
                    <img class="centered-and-cropped" width="520" height="600"
                        style={{ borderRadius: "5%", objectFit: "cover" }} src={about} alt="Profile Image"></img>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;