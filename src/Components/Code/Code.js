import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPage from "../ProjectPage/ProjectPage";

import Meditap from "../Projects/Meditap";
import Askey from "../Projects/Askey";
import RealTime from "../Projects/RealTime";

import MeditapLogo from "../../assets/meditap.svg";
import AskeyLogo from "../../assets/askey.svg";
import RealTimeLogo from "../../assets/realtime.png";

import "./Code.scss";

function CodeList() {
  return (
    <div>
      <div className="title left">programme (no pun intended)</div>
      <NavLink className="link" to="/code/meditap">
        <ProjectCard image={MeditapLogo} {...Meditap} />
      </NavLink>
      <NavLink className="link" to="/code/askey">
        <ProjectCard image={AskeyLogo} {...Askey} />
      </NavLink>
      <NavLink className="link" to="/code/real-time-collaboration">
        <ProjectCard image={RealTimeLogo} {...RealTime} />
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
          <Route path="/code/askey" render={() => <ProjectPage {...Askey} />} />
          <Route
            path="/code/real-time-collaboration"
            render={() => <ProjectPage {...RealTime} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Code;
