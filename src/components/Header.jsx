import React, { useState, useEffect } from "react";

const Header = ({ introRef, aboutMeRef, skillsRef, projectsRef }) => {
    const [activeItem, setActiveItem] = useState(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
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
        <header id="header" role="banner">
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