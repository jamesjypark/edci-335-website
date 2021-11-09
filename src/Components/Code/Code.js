import React from "react";
import { NavLink, Switch, Route, useLocation } from "react-router-dom";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPage from "../ProjectPage/ProjectPage";

import Intro from "../Projects/Intro";
import Part1 from "../Projects/Part1";
import Part2 from "../Projects/Part2";
import Part3 from "../Projects/Part3";
import Outro from "../Projects/Outro";

import IntroLogo from "../../assets/intro.svg";
import Part1Logo from "../../assets/part1.svg";
import Part2Logo from "../../assets/part2.svg";
import Part3Logo from "../../assets/part3.svg";
import OutroLogo from "../../assets/outro.svg";

import "./Code.scss";

function CodeList() {
  return (
    <div>
      <div className="title left">programme (no pun intended)</div>
      <NavLink className="link" to="/edci-335-website/code/intro">
        <ProjectCard image={IntroLogo} {...Intro} />
      </NavLink>
      <NavLink className="link" to="/edci-335-website/code/part1">
        <ProjectCard image={Part1Logo} {...Part1} />
      </NavLink>
      <NavLink className="link" to="/edci-335-website/code/part2">
        <ProjectCard image={Part2Logo} {...Part2} />
      </NavLink>
      <NavLink className="link" to="/edci-335-website/code/part3">
        <ProjectCard image={Part3Logo} {...Part3} />
      </NavLink>
      <NavLink className="link" to="/edci-335-website/code/outro">
        <ProjectCard image={OutroLogo} {...Outro} />
      </NavLink>
    </div>
  );
}

class Code extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/edci-335-website/code" component={CodeList} />
          <Route
            path="/edci-335-website/code/intro"
            render={() => <ProjectPage {...Intro} />}
          />
          <Route
            path="/edci-335-website/code/part1"
            render={() => <ProjectPage {...Part1} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Code;
