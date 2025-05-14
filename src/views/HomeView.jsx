import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Archive from '../components/Archive';
import Projects from '../components/Projects';
// import Career from '../components/Career';
import Footer from '../components/Footer';

const HomeView = () => {
    return (
        <div id="background">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "94%", float: "left" }}>
                    <Main>
                        <Intro /> {/* Job, Simple greeting(including name) */}
                        <AboutMe /> {/* Name, Phone, Email, School */}
                        <Skills /> { /*Language, Frontend, Backend, Devops
                        {/* <Archive /> github, it 블로그 */}
                        <Projects />
                        {/* <Career /> */}
                    </Main>
                </div>
                <div style={{ width: "6%", float: "right" }}>
                    <Header /> {/* Logo(Alex's Portfolio), Navigation */}
                </div>
            </div>
            <div>
                <Footer /> {/* Copyright */}
            </div>
        </div>
    )
}

export default HomeView;