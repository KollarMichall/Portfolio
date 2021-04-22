import React from 'react'
import foto from '../img/foto 1.png'

function Header() {
    return (
        <div className="header">
            <section id="header">
                <div className="container text-center">
                <div className="user-box">
                <img src={foto} alt="foto"/>
                <h1>Michal Kollar</h1>
                <p>Freelance Front-End Developer</p>
                </div>
                </div>
                <div className="scroll-btn">
                    <div className="scroll-bar"><a href="#home"><span></span></a></div>
                </div>

            </section>
        </div>
    )
}

export default Header
