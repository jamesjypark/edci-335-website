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
      orientation: "right"
    });
  };
  render() {
    return (
      <div className="Home">
        <div className="title left">motivation</div>
        <div className="Portrait">
          <img src={Blocker} />
          <img
            className="main"
            ref={this.portraitRef}
            src={Portrait}
            onLoad={this.createParallax}
          />
          <img src={Background} />
        </div>
        <div className="subheader1">Why are there different programming languages?</div>
        <div className="description basetext1 medium">
          <div>And more importantly, which one should you learn?</div>
          <div>These are some of the first questions anyone who wants to learn programming ask - but the answer isn't always obvious.</div>
          <br />
          <div>The reason why it's not easy to answer this question is because it <i>depends</i> on the situation. What are you trying to build? How many users will be using it? Which platform do you want your program to run? These all factor into answering the question. </div>
          <br />
          <div>We are <a href="https://www.linkedin.com/in/josef-waller-ab4870196/" className="link" target="_blank">Josef</a> and <a href="https://www.linkedin.com/in/jamesjypark/" className="link" target="_blank">James</a>, 4th year Computer Science students at the University of Victoria. We will do our best to explain how different programming languages differ and which one is right for you.</div>
          <br />
          <div>Let's get <a href="/code" className="link">started!</a></div>
        </div>
      </div>
    );
  }
}

export default Home;
