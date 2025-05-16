import React from "react";

interface Project {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "AI/ML Football Analysis",
        description: "AI/ML Football Analysis system implemented using Python, YOLO, and OpenCV. Provides statistics of the inputted football video.",
        thumbnail: require("../assets/img/thumbnails/football_analysis.png"),
        link: "https://github.com/1128alex/football_analysis",
    },
    {
        title: "Virtual Academic Management System",
        description: "Web app of academic management system using Java, JS, MySQL, Boostrap, Spring.",
        thumbnail: require("../assets/img/thumbnails/final_project.png"),
        link: "https://github.com/1128alex/final_project",
    },
    {
        title: "My personal website",
        description: "Personal portfolio website using React, TypeScript, and SASS.",
        thumbnail: require("../assets/img/thumbnails/portfolio.png"),
        link: "https://github.com/1128alex/portfolio",
    },
    {
        title: "Biquadris Game",
        description: "A Latinization of the game Tetris expanded for two player competition. Final Project for CS 246(Object-Oriented Software Development).",
        thumbnail: require("../assets/img/thumbnails/biquadris.png"),
        link: "https://github.com/1128alex/biquadris",
    },
];

const cardStyle: React.CSSProperties = {
    background: "#19232d",
    borderRadius: "16px",
    padding: "28px 24px 20px 24px",
    color: "#e6f1ff",
    width: "320px",
    minWidth: "320px",
    maxWidth: "320px",
    minHeight: "340px",
    maxHeight: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
};

const iconStyle: React.CSSProperties = {
    objectFit: "cover",
    borderRadius: "8px",
    height: "180px",
    width: "272px",
    display: "block",
    margin: "0 auto 18px auto",
};

const titleStyle: React.CSSProperties = {
    color: "#e6f1ff",
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "8px",
};

const descStyle: React.CSSProperties = {
    color: "#aebbc9",
    fontSize: "16px",
    fontWeight: 400,
};

const Projects = () => {
    return (
        <section>
            <div id="projects" style={{ paddingRight: "15%" }}>
                <h1 style={{ color: "#609ca4", fontSize: "60px", paddingTop: "80px" }}>Projects</h1>
                <div style={{ display: "flex", gap: "32px", marginTop: "32px" }}>
                    {projects.map((project) => (
                        <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", width: "100%" }}>
                            <div style={cardStyle}>
                                <img src={project.thumbnail} alt={project.title} style={iconStyle} />
                                <div style={titleStyle}>{project.title}</div>
                                <div style={descStyle}>{project.description}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;