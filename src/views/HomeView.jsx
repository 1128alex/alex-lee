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
        <div>
            <Header /> {/* Logo(Alex's Portfolio), Navigation */}
            <Main>
                <Intro /> {/* Job, Simple greeting(including name) */}
                <AboutMe /> {/* Name, Phone, Email, School */}
                <Skills /> { /*Language, Frontend, Backend, Devops */}
                <Archive /> {/* github, it 블로그, 일상 블로그 */}
                <Projects />
                {/* <Career /> */}
                <Footer /> {/* Copyright */}
            </Main>
        </div>
    )
}

export default HomeView;