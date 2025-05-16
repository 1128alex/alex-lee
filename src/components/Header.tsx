import React, { useState, useEffect, RefObject } from "react";

// import logo from "../assets/img/logo.jpg";
import logo from "../assets/img/logo3.png";

interface HeaderProps {
    introRef: RefObject<HTMLDivElement | null>;
    aboutMeRef: RefObject<HTMLDivElement | null>;
    skillsRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
}

const Header: React.FC<HeaderProps> = ({ introRef, aboutMeRef, skillsRef, projectsRef }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const scrollToSection = (elementRef: RefObject<HTMLDivElement | null>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const sections = [
            { id: "intro", ref: introRef },
            { id: "aboutme", ref: aboutMeRef },
            { id: "skills", ref: skillsRef },
            { id: "projects", ref: projectsRef },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveItem(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(({ ref }) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [introRef, aboutMeRef, skillsRef, projectsRef]);

    return (
        <header id="header" role="banner" style={{ paddingLeft: "60%" }}>
            <div>
                <a href="#intro">
                    <img
                        src={logo}
                        alt="logo"
                        className="profile-pic"
                        height="100px"
                    />
                </a>
            </div>
            <div id="header-container">
                <nav className="nav-box" style={{ position: "fixed" }}>
                    <ul className="nav">
                        <li
                            onClick={() => scrollToSection(introRef)}
                            className={`item ${activeItem === "intro" ? "active" : ""}`}
                        >
                            <a href="#intro" className="link">intro</a>
                        </li>
                        <li
                            onClick={() => scrollToSection(aboutMeRef)}
                            className={`item ${activeItem === "aboutme" ? "active" : ""}`}
                        >
                            <a href="#aboutme" className="link">aboutme</a>
                        </li>
                        <li
                            onClick={() => scrollToSection(skillsRef)}
                            className={`item ${activeItem === "skills" ? "active" : ""}`}
                        >
                            <a href="#skills" className="link">skills</a>
                        </li>
                        <li
                            onClick={() => scrollToSection(projectsRef)}
                            className={`item ${activeItem === "projects" ? "active" : ""}`}
                        >
                            <a href="#projects" className="link">projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;