import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPage from "../ProjectPage/ProjectPage";

import Intro from "../Projects/Intro";
import Part1 from "../Projects/Part1";
import Part2 from "../Projects/Part2";
import Part3 from "../Projects/Part3";
import Outro from "../Projects/Outro";
import Meditap from "../Projects/Meditap";

import MeditapLogo from "../../assets/meditap.svg";

import "./Code.scss";

function CodeList() {
  return (
    <div>
      <div className="title left">programme (no pun intended)</div>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...Intro} />
      </NavLink>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...Part1} />
      </NavLink>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...Part2} />
      </NavLink>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...Part3} />
      </NavLink>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...Outro} />
      </NavLink>
    </div>
  );
}

class Code extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/code" component={CodeList} />
          <Route
            path="/code/meditap"
            render={() => <ProjectPage {...Meditap} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Code;
