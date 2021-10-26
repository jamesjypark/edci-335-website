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
        <div className="title left">our goal</div>
        <div className="Portrait">
          <img src={Blocker} />
          <img
            ref={this.portraitRef}
            src={Portrait}
            onLoad={this.createParallax}
          />
          <img src={Background} />
        </div>
        <div className="subheader1">Why are there different programming languages?</div>
        <div className="description basetext1 medium">
          <div>And more importantly, which one should you learn?</div>
          <br />
          <div><a href="https://www.linkedin.com/in/josef-waller-ab4870196/" className="link" target="_blank">Josef</a> and <a href="https://www.linkedin.com/in/jamesjypark/" className="link" target="_blank">James</a> are 4th year Computer Science students at the University of Victoria, and we are all about to answer these important questions.</div>
          <div>Let's get <a href="/code" className="link">started!</a></div>
        </div>
      </div>
    );
  }
}

export default Home;
