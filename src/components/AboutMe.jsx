import React from "react";
import about from "../assets/img/about.jpg";

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "70%", float: "left" }}></div>
                <div style={{ width: "30%", float: "left" }}>
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;