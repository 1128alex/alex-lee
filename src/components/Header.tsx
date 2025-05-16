import React, { useState, useEffect, RefObject } from "react";

// import logo from "../assets/img/logo.jpg";
// import logo from "../assets/img/logo3.png";
import logo from "../assets/img/signature.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";

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
        <header role="banner" style={{ paddingLeft: "50%" }}>
            <div id="header" style={{ position: "fixed", height: "100%" }}>
                <a href="#intro">
                    <img
                        src={logo}
                        alt="logo"
                        className="profile-pic"
                        height="100px"
                        style={{}}
                    />
                </a>
                <div id="header-container" >
                    <nav className="nav-box" >
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
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: "25%",
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    {/* <a
                        href="https://www.instagram.com/ezdnjs_l/"
                        target="_blank"
                        
                    >
                        <img
                            src={instagram}
                            height="27px"
                            width="27px"
                            alt="Instagram"
                            style={{ filter: "grayscale(50%)" }}
                        />
                    </a> */}
                    <a
                        href="https://github.com/1128alex"
                        target="_blank"
                    >
                        <img
                            src={github}
                            height="27px"
                            width="27px"
                            alt="GitHub"
                            style={{ opacity: 0.7, filter: "invert(54%) sepia(13%) saturate(1162%) hue-rotate(134deg) brightness(92%) contrast(88%)" }}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alex-jiwon-lee/"
                        target="_blank"
                    >
                        <img
                            src={linkedin}
                            height="27px"
                            width="27px"
                            alt="LinkedIn"
                            style={{ opacity: 0.7, filter: "invert(54%) sepia(13%) saturate(1162%) hue-rotate(134deg) brightness(92%) contrast(88%)" }}
                        />
                    </a>
                </div>
            </div>
        </header >
    );
};

export default Header;