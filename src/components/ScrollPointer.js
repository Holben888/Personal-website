import React, { Component } from 'react';
import "./styles.css";

class ScrollPointer extends Component {
    render() {
        return (
            <div className={`Scroll-pointer animated ${this.props.scrolled ? 'fadeOutDown' : 'fadeIn delayed'}`}>
                <div className="animated bounce delayed">
                    <p className="label">Scroll down</p>
                    <p className="chevron"><span className="fa fa-chevron-down" /></p>
                </div>
            </div>
        )
    }
}
export default ScrollPointer;