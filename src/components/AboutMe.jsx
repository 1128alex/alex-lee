import React from "react";
import profile from "../assets/img/profile.jpg";

const AboutMe = () => {
    return (
        <div id="aboutme">
            <h1 style={{ color: "#609ca4" }}>About Me</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "70%", float: "left" }}>
                    <p>
                        Hi! I'm Alex Lee, a software engineer based in Waterloo, Canada. I am currently a student at the University of Waterloo, pursuing a degree in Data Science. I have a passion for technology and love to learn new things. I am always looking for new challenges and opportunities to grow my skills.
                    </p>
                </div>
                <div style={{ width: "30%", float: "left" }}>
                    <img class="centered-and-cropped"
                        style={{ borderRadius: "5%", objectFit: "cover", width: "95%", height: "90%" }} src={profile} alt="Profile"></img>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;