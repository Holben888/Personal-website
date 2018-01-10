import React, { Component } from 'react';
import "./styles.css";

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="container">
                    <div className="Header-pic">
                        <img src="/images/profile.png" className="App-logo animated slideInRight" alt="logo" />
                    </div>
                    <div className="Header-title">
                        <h1 className="animated slideInLeft">Hi, I'm Ben Holmes.</h1>
                        <p className="animated slideInLeft">A programmer with a passion for web development and design.</p>
                        <p className="animated slideInLeft">
                            <a href="https://drive.google.com/file/d/1CGJ4aMMwBTuYf_hlYG0zAHt9QcoPTdV9/view">Resume</a>
                            <a href="https://github.com/Holben888">GitHub</a>
                            <a href="mailto:holben888@gmail.com">Contact</a>
                        </p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;