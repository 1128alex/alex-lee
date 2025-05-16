import React from "react";
import ProjectBanner from "./ProjectBanner";

interface Project {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
    skills: string[];
    logoFileNames: string[];
}

const projects: Project[] = [
    {
        title: "AI/ML Football Analysis",
        description: "AI/ML Football Analysis system implemented using Python, YOLO, and OpenCV. Provides statistics of the inputted football video.",
        thumbnail: require("../assets/img/thumbnails/football_analysis.png"),
        link: "https://github.com/1128alex/football_analysis",
        skills: ["Python", "YOLO", "OpenCV", "Pandas", "NumPy", "Matplotlib"],
        logoFileNames: ["python.png", "yolo.png", "opencv.png", "pandas.png", "numpy.png", "matplotlib.png"]
    },
    {
        title: "Virtual Academic Management System",
        description: "Web app of academic management system using Java, JS, MySQL, Boostrap, Spring.",
        thumbnail: require("../assets/img/thumbnails/final_project.png"),
        link: "https://github.com/1128alex/final_project",
        skills: ["Java", "Javascript", "MySQL", "Spring", "Bootstrap"],
        logoFileNames: ["java.png", "javascript.png", "mysql.png", "spring.png", "bootstrap.png"]
    },
    {
        title: "My personal website",
        description: "Personal portfolio website using React, TypeScript, and SASS.",
        thumbnail: require("../assets/img/thumbnails/portfolio.png"),
        link: "https://github.com/1128alex/portfolio",
        skills: ["React", "Typescript", "SASS"],
        logoFileNames: ["react.png", "typescript.png", "sass.png"]
    },
    {
        title: "Biquadris Game",
        description: "A Latinization of the game Tetris expanded for two player competition. Final Project for CS 246(Object-Oriented Software Development).",
        thumbnail: require("../assets/img/thumbnails/biquadris.png"),
        link: "https://github.com/1128alex/biquadris",
        skills: ["C++"],
        logoFileNames: ["C.png"]
    },
];

const Projects = () => {
    return (
        <section>
            <div id="projects" style={{ paddingRight: "15%" }}>
                <h1 style={{ color: "#609ca4", fontSize: "60px", paddingTop: "80px" }}>Projects</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "32px", paddingBottom: "300px" }}>
                    {projects.map((project) => (
                        <ProjectBanner
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            thumbnail={project.thumbnail}
                            link={project.link}
                            skills={project.skills}
                            logoFileNames={project.logoFileNames}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;