import React from "react";

const Header = () => {
    return (
        <header id="header" role="banner">
            <div>
                <h1>Header</h1>
            </div>
            <div id="header-container">
                {/* <div className="logo-box"> */}
                {/* <a href="/" className="logo"> */}
                {/* <div className="name">Alex Lee</div> */}
                {/* <div className="school">University of Waterloo</div> */}
                {/* </a> */}
                {/* </div> */}
                <nav className="nav-box" style={{ position: "fixed" }}>
                    <ul className="nav">
                        <li className="item"><a href="#intro" className="link">intro</a></li>
                        <li className="item"><a href="#aboutme" className="link">aboutme</a></li>
                        <li className="item"><a href="#skills" className="link">skills</a></li>
                        <li className="item"><a href="#archive" className="link">archive</a></li>
                        <li className="item"><a href="#projects" className="link">projects</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;