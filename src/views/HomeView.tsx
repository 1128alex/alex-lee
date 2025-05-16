import React, { useRef, useEffect } from 'react';
import { useSpring, useScroll, MotionValue } from "motion/react"
import * as motion from "motion/react-client"

import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const HomeView: React.FC = () => {
    const introRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll()
    const scaleX: MotionValue<number> = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.001,
    })

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
                        if (entry.target.id !== "intro" || window.location.hash) {
                            window.history.replaceState(null, "", `#${entry.target.id}`);
                        }
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
    }, []);

    return (
        <div id="background">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scaleX as unknown as string | number,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#609ca4",
                    borderBottomRightRadius: "50px",
                    borderTopRightRadius: "50px",
                    zIndex: 1000,
                }}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "30%", float: "left" }}>
                    <Header
                        introRef={introRef}
                        aboutMeRef={aboutMeRef}
                        skillsRef={skillsRef}
                        projectsRef={projectsRef}
                    /> {/* Logo(Alex's Portfolio), Navigation */}
                </div>
                <div style={{ width: "70%", float: "right" }}>
                    <Main>
                        <div ref={introRef} id="intro">
                            <Intro /> {/* Job, Simple greeting(including name) */}
                        </div>
                        <div ref={aboutMeRef} id="aboutme">
                            <AboutMe /> {/* Name, Phone, Email, School */}
                        </div>
                        <div ref={skillsRef} id="skills">
                            <Skills /> {/* Language, Frontend, Backend, Devops */}
                        </div>
                        <div ref={projectsRef} id="projects">
                            <Projects />
                        </div>
                    </Main>
                </div>
            </div>
            <div>
                <Footer /> {/* Copyright */}
            </div>
        </div >
    );
}

export default HomeView;