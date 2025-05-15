import React from "react";
import about from "../assets/img/about.jpg";

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "70%", float: "left" }}>
                    <p>
                        Hi! I'm Alex Lee, a software engineer based in Waterloo, Canada. I am currently a student at the University of Waterloo, pursuing a degree in Data Science. I have a passion for technology and love to learn new things. I am always looking for new challenges and opportunities to grow my skills.
                    </p>
                </div>
                <div style={{ width: "30%", float: "left" }}>
                    {/* <img src={about} alt="" /> */}
                    <img class="centered-and-cropped" width="450" height="550"
                        style={{ borderRadius: "5%", objectFit: "cover" }} src={about} alt="Profile"></img>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;