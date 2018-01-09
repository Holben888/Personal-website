import React, { Component } from 'react';
import "animate.css/animate.min.css";
import "../styles/App.css";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-logo">
                    <img src="/images/profile-2.JPG" className="App-logo animated slideInRight" alt="logo" />
                </div>
                <div className="App-title">
                    <h1 className="animated slideInLeft">Hi, I'm Ben Holmes.</h1>
                    <p className="animated slideInLeft">A programmer with a passion for web development and design.</p>
                    <p className="animated slideInLeft"><a href="https://drive.google.com/file/d/1CGJ4aMMwBTuYf_hlYG0zAHt9QcoPTdV9/view">Resume</a>
                        <a href="https://github.com/Holben888">GitHub</a>
                        <a href="mailto:holben888@gmail.com">Contact</a>
                    </p>
                </div>
            </header>
        )
    }
}

export default Header;