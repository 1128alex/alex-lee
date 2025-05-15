import React from 'react';

import { useSpring, useScroll } from "motion/react"

import * as motion from "motion/react-client"

import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
// import Archive from '../components/Archive';
import Projects from '../components/Projects';
// import Career from '../components/Career';
import Footer from '../components/Footer';

const HomeView = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="background">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#609ca4",
                }}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "15%", float: "left" }}>
                    <Header /> {/* Logo(Alex's Portfolio), Navigation */}
                </div>
                <div style={{ width: "85%", float: "right" }}>
                    <Main>
                        <Intro /> {/* Job, Simple greeting(including name) */}
                        <AboutMe /> {/* Name, Phone, Email, School */}
                        <Skills /> { /*Language, Frontend, Backend, Devops
                        {/* <Archive /> github, it 블로그 */}
                        <Projects />
                        {/* <Career /> */}
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