import React from "react";

const Header = ({ introRef, aboutMeRef, skillsRef, projectsRef }) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <header id="header" role="banner">
            <div id="header-container">
                <nav className="nav-box" style={{ position: "fixed" }}>
                    <ul className="nav">
                        <li
                            onClick={() => scrollToSection(introRef)}
                            className="item"
                        >
                            <a href="#intro" className="link">intro</a>
                        </li>
                        <li
                            onClick={() => scrollToSection(aboutMeRef)}
                            className="item"
                        >
                            <a href="#aboutme" className="link">aboutme</a>
                        </li>
                        <li
                            onClick={() => scrollToSection(skillsRef)}
                            className="item"
                        >
                            <a href="#skills" className="link">skills</a>
                        </li>
                        <li
                            onClick={() => scrollToSection(projectsRef)}
                            className="item"
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