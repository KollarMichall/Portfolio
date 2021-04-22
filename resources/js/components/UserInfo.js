import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Services from './Services'
import SocialIcons from './SocialIcons'
import { Link, animateScroll as scroll } from "react-scroll";

const UserInfo = () => {
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    return (
        <div className="home">
            <section id="home">
                <div className="nav-bar">
            <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#top">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                <Link offset={50} duration={1000} smooth={true} spy={true} to="top" onClick={scrollToTop}>HOME</Link>
                <Link offset={-50} duration={1000} smooth={true} spy={true} to="about">ABOUT ME</Link>
                <Link offset={-50} duration={1000} smooth={true} spy={true} to="resume">RESUME</Link>
                <Link offset={-50} duration={1000} smooth={true} spy={true} to="services">SERVICES</Link>
                <Link duration={1000} smooth={true} spy={true} to="contact" >CONTACT</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
                </div>
            <About/>
            <SocialIcons/>
            <Resume/>
            <Services/>
            <Contact/>
            </section>
        </div>
    )
}

export default UserInfo
