import React, { Component } from 'react';
import '../styles/App.css';
import Section from './Section';
import Header from './Header';
import "animate.css/animate.min.css";

const SECTION_HEIGHT = 500;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [{
        title: 'Education',
        content: "With Codecademy sparking my coding interest in middle school, I was motivated to pursue GUI projects in Java throughout high school and eventually conduct a thesis study based in Android. Pursuing a CS degree was the natural next step, with GA Tech quickly becoming my new home. I recently completed C++ and ROS training to become a valuable member of the RoboJackets robotics team. I also participated in the popular HackGT hackathon on campus, along with several seminars on mobile app development.",
        panels: [{
          img: '/images/GT-logo.jpg',
          label: 'Georgia Institute of Technology',
          sublabel: 'Fall 2017 - Spring 2020',
          content: 'Pursuing a BS in Computer Science, currently focusing on data structure and algorithm fundamentals in Java'
        }, {
          img: '/images/AMHS-logo.jpg',
          label: 'Academic Magnet High School',
          sublabel: 'Fall 2013 - Spring 2017',
          content: 'Graduated as Salutatorian and a National AP Scholar; member of the Cybersecurity Club, PF Debate Club, and Mu Alpha Theta (competitive mathematics club)'
        }]
      }, {
        title: 'Projects',
        content: 'From making Galaga in Java to improving productivity with a Chrome extension for annotation, I always try to keep busy with programming outside of the classroom. I have developed a proficiency in JavaScript, HTML, and CSS after GDG introduced me to the AngularJS framework. I proceeded to learn the basics of functional programming with Redux in tandem with Angular 2 and TypeScript, as well as React.js to make this very website. My experiences in native Android development have also built on my Java and XML knowledge.',
        panels: [{
          img: '/images/OutLink_demo.gif',
          label: 'OutLink',
          content: 'A Microsoft Hack Productivity submission with two major capabilities: sharing one\'s thoughts on a webpage via one\'s OutLook account, and viewing a colleague\'s notes and annotations within the browser window without ever switching apps.',
          buttons: [{
            type: 'Store',
            link: 'https://chrome.google.com/webstore/detail/outlink/lhjdhnifcljndfehpifmfnfagmgelced?authuser=1'
          }, {
            type: 'Devpost',
            link: 'https://devpost.com/software/outlink'
          }, {
            type: 'GitHub',
            link: 'https://github.com/Holben888/OutLink'
          }]
        }, {
          img: '/images/Binder_screenshot.png',
          label: 'Project Binder',
          content: "A HackGT Project created with two fellow developers using Android Studio, OpenCV, and the Evernote API. Meant for students, this app allows one to input their class schedule for the week. At the end of each class, a notification appears allowing one to take a picture of that day's notes to upload to Evernote. OpenCV automatically crops the scanned image to only feature the notebook page.",
          buttons: [{
            type: 'Devpost',
            link: 'https://devpost.com/software/project-binder'
          }, {
            type: 'GitHub',
            link: 'https://github.com/athreyaanand/ProjectBinder'
          }]
        }, {
          img: '/images/Filter-icon.png',
          label: 'Filter Email',
          content: 'An Android app meant to filter out important email notifications based on user preference. High school students and GDG employees tested the app for one month, and a final accuracy percentage of email recommendation was yielded (~66%)',
          buttons: [{
            type: 'Store',
            link: 'https://play.google.com/store/apps/details?id=com.fsck.filter'
          }, {
            type: 'Research Thesis',
            link: 'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiZW5qYW1pbmhvbG1lc3BvcnRmb2xpb3xneDozOThkNzc5ZDIyNGJkODA1'
          }]
        }, {
          img: '/images/NYT_demonstration.gif',
          label: 'New York Times Feed Viewer',
          content: 'A project using JQuery, HTML, and CSS along with the Feednami client to display multiple NYT news feeds. Naive Bayes probability calculations allow for article recommendation.',
          buttons: [{
            type: 'JSFiddle',
            link: 'https://jsfiddle.net/Holben888/n0dgq1wm/80/'
          }]
        }, {
          img: '/images/Skyward_demo.gif',
          label: 'Other Projects',
          content: "Before developing productivity applications or taking the dive into JavaScript, I used my spare time to experiment with GUI libraries in both Java and Python. I worked with perspective to create the sudo-3D game Skyward as shown above, as well as graphic creation in Gimp to create versions of Galaga, Doodle Jump, and Tron.",
          buttons: [{
            type: 'GitHub',
            customText: 'Java Projects',
            link: 'https://github.com/Holben888/Java-Projects'
          }, {
            type: 'GitHub',
            customText: 'Python Projects',
            link: 'https://github.com/Holben888/Python-Projects'
          }]
        }]
      }, {
        title: 'Work',
        content: "It's not often that an established startup allows a high school sophomore to work on their official webpage for nonprofit administrators, but Good Done Great was clearly no typical company. Now owned by YourCause, GDG empowers employees to give back to nonprofits through their company's giving programs. ",
        panels: [{
          img: '/images/GDG_YourCause.png',
          label: 'GDG Web Client',
          tall: true,
          content: "I was thrown into the deep end right at the start, tasked with creating an image crop modal and image gallery for clients to choose their profile and banner pictures. Countless Stack Overflow tabs and Bootstrap styling allowed me to pull through, but I was never afraid to ask the head UI designer for help understanding their framework. To my surprise, the company decided to include my finished gallery in that week's website build with minimal changes, making it my first successful coding project in the workplace."
        }, {
          img: '/images/GDG_collaboration.jpg',
          label: 'Open collaboration',
          tall: true,
          content: "As a startup with a handful of employees working on the website's front end design, an open work environment with easy communication between teams made me immediately engaged in projects. We also had morning meetings to discuss our assigned tasks and our current progress to better gauge what features could be included in the weekly build release."
        }, {
          img: '/images/GDG_proofs-of-concept.jpg',
          label: 'Proofs of Concept',
          tall: true,
          content: "When I wasn't formatting table views for company analytics or fixing reported bugs, the head UI developer allowed me to draft proofs of concept for potential website features. This included a social media feed to implement company profiles on their home page, a guided tour of the website's features, and communication feed where nonprofits could post messages to followers. Though not all concepts were implemented, the creative liberty allowed me to experiment with the complexities of CSS layouts and AngularJS."
        }, {
          img: '/images/GDG_app.png',
          label: 'Mobile App',
          tall: true,
          content: "My final summer at the company was easily the most challenging. Not only did I have to grow accustom to TypeScript and mobile styling libraries using Ionic, but I was also tasked with creating a mobile experience from the ground up with a fellow intern. Using data models and observables via Redux proved invaluable once overcoming the somewhat steep learning curve, though limited documentation on such a new framework was always difficult. Creating the Give Modal was the greatest challenge, as it required considering different payment and account types as well as custom donation preferences."
        }]
      }]
    }
  }
  handleScroll() {
    let sections = this.state.sections
    let somethingChanged = false
    let scrollOffset = window.innerHeight + (window.pageYOffset || document.documentElement.scrollTop)
    for (const [index, section] of sections.entries()) {
      let elementOffset = window.innerHeight / 3 + (index + 1) * SECTION_HEIGHT
      if (scrollOffset >= elementOffset && !section.visible) {
        section.visible = true
        somethingChanged = true
      }
    }
    if (somethingChanged)
      this.setState(() => {
        return {
          sections: sections
        }
      })
  }
  enableScroll() {
    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }


    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }
  disableScroll() {
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;
    }

    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault;
    document.onkeydown = (e) => {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }
  }
  componentDidMount() {
    this.disableScroll()
    var _this = this
    window.onscroll = () => this.handleScroll()
    setTimeout(() => {
      window.scrollTo(0, (window.pageYOffset || document.documentElement.scrollTop) + 1)
      _this.enableScroll()
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ height: this.state.sections.length * SECTION_HEIGHT + 'px' }}>
          {this.state.sections.map((section, index) => {
            return (
              <Section key={index} renderInfo={section} />
            )
          })}
        </div>
        <footer className="App-footer">Created using ReactJS. <a href="https://github.com/Holben888/personal-website">View on GitHub</a></footer>
      </div>
    );
  }
}

export default App;
