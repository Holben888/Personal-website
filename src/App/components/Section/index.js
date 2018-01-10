import React, { Component } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import "./styles.css";
import { Textfit } from 'react-textfit';

class Panel extends Component {
    getDelay(index) {
        return {
            animationDelay: 0.6 + index * 0.1 + 's',
            WebkitAnimationDelay: 0.6 + index * 0.1 + 's',
            MozAnimationDelay: 0.6 + index * 0.1 + 's'
        }
    }
    getBtnColor(btnType) {
        if (btnType === 'GitHub')
            return '#3F4449'
        else if (btnType === 'Devpost')
            return '#326477'
        else if (btnType === 'JSFiddle')
            return '#0084FE'
        else if (btnType === 'Store')
            return '#00A75F'
        else
            return 'gray'
    }
    render() {
        return (
            <div className="Section-item Panel animated fadeInUp" style={this.getDelay(this.props.index)}>
                <img src={this.props.info.img} alt="" />
                <h1>{this.props.info.label}</h1>
                {this.props.info.sublabel && <p className="sublabel">{this.props.info.sublabel}</p>}
                <Textfit mode="multi" className={this.props.info.tall ? 'content tall' : 'content'}>
                    {this.props.info.content}
                </Textfit>
                {this.props.info.buttons && <div className="Panel-btn-container">
                    {this.props.info.buttons.map((button, index) => {
                        return (
                            <a className="Panel-btn" href={button.link} style={{ background: this.getBtnColor(button.type) }}>
                                <img src={`/logos/${button.type}-icon.ico`} alt="" />
                                <p>{button.customText || button.type}</p>
                            </a>
                        )
                    })}
                </div>}
            </div>
        )
    }
}

class Section extends Component {
    render() {
        return (
            <div className="Section animated fadeInDown" style={{
                background: `url(/images/${this.props.renderInfo.title}-background.png) no-repeat center`
            }}>
                {this.props.renderInfo.visible && <div className="Section-item animated fadeInUp">
                    <h1>{this.props.renderInfo.title}</h1>
                    <p className="content">{this.props.renderInfo.content}</p>
                </div>}
                {this.props.renderInfo.visible && this.props.renderInfo.panels.map((panel, index) => {
                    return (
                        <Panel key={index} info={panel} index={index} />
                    )
                })}
                <div className={`Section-cover ${this.props.renderInfo.visible ? 'animated slideOutLeft' : ''}`} >
                    {this.props.renderInfo.title}
                </div>
            </div>
        )
    }
}

export default Section;