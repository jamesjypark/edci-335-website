import React from "react";

import "./Home.scss";

import Background from "../../assets/background.png";
import Portrait from "../../assets/portrait.png";
import Blocker from "../../assets/blocker.png";
import simpleParallax from "simple-parallax-js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.portraitRef = React.createRef();
  }
  createParallax = () => {
    let image = this.portraitRef.current;
    new simpleParallax(image, {
      overflow: true,
      orientation: "left"
    });
  };
  render() {
    return (
      <div className="Home">
        <div className="title left">about me</div>
        <div className="Portrait">
          <img src={Blocker} />
          <img
            ref={this.portraitRef}
            src={Portrait}
            onLoad={this.createParallax}
          />
          <img src={Background} />
        </div>
        <div className="subheader1">James Juyoung Park</div>
        <div className="description basetext1 medium">
          <div>Software Engineering Student at the</div>
          <strong>University of Victoria</strong>
        </div>
        <div className="links basetext1 medium">
          <a
            href="https://drive.google.com/file/d/1nIzqEAhsL7JihHlsJ68sqkV1hOSfO4Lb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Resume
          </a>
          <a
            href="https://github.com/jamesjypark"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/jamespark"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Dribbble
          </a>
          <a
            href="https://www.linkedin.com/in/jamesjypark/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
