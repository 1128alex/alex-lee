import React from "react";
import profile from "../assets/img/profile.jpg";

const AboutMe = () => {
    return (
        <section>
            <div id="aboutme" style={{ paddingRight: "15%" }}>
                <h1 style={{ color: "#609ca4", fontSize: "70px", textDecoration: "underline", paddingTop: "120px" }}>About Me</h1>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "70%", float: "left" }}>
                        <p style={{ color: "#99a9af", paddingTop: "10px", width: "90%", fontSize: "20px" }}>
                            Hi! I'm <b>Alex Lee</b>, currently pursuing a degree in <b>Data Science</b> at the <b>University of Waterloo</b>. I have a passion for technology and love to learn new things. I am always looking for new challenges and opportunities to grow my skills.
                        </p>
                        <h1 style={{ color: "#609ca4", fontSize: "35px", paddingTop: "20px" }}>Hobbies</h1>
                        <ul style={{ color: "#99a9af", fontSize: "18px", paddingLeft: "20px", listStyleType: "disc" }}>
                            <li>Playing soccer</li>
                            <li>Snowboarding</li>
                            <li>Coding</li>
                            <li>Playing video games</li>
                            <li>Drawing</li>
                        </ul>
                        <h1 style={{ color: "#609ca4", fontSize: "30px", paddingTop: "20px" }}>Field of interest</h1>
                        <ul style={{ color: "#99a9af", fontSize: "18px", paddingLeft: "20px", listStyleType: "disc" }}>
                            <li>Data Science/Data Analysis</li>
                            <li>AI/ML/DL</li>
                            <li>Fullstack Development</li>
                            <li>Game Development</li>
                        </ul>
                    </div>
                    <div style={{ width: "30%", float: "left" }}>
                        <img class="centered-and-cropped"
                            style={{ objectFit: "cover", width: "100%", height: "100%" }} src={profile} alt="Profile"></img>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default AboutMe;