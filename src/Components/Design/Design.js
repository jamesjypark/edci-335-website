import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPage from "../ProjectPage/ProjectPage";

import Meditap from "../Projects/Meditap";
import DailyUi from "../Projects/DailyUi";
import HangulPrinting from "../Projects/HangulPrinting";
import AutonomousRov from "../Projects/AutonomousRov/AutonomousRov";

import DailyUiLogo from "../../assets/daily-ui.png";
import HangulLogo from "../../assets/hangul.png";

function DesignList() {
  return (
    <div>
      <div className="title left">design</div>
      <NavLink className="link" to="/design/daily-ui">
        <ProjectCard image={DailyUiLogo} {...DailyUi} />
      </NavLink>
      <NavLink className="link" to="/design/hangul-printing">
        <ProjectCard image={HangulLogo} {...HangulPrinting} />
      </NavLink>
      <div className="Spacer" style={{ height: "100px" }}></div>
    </div>
  );
}

class Design extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/design" component={DesignList} />
          <Route
            path="/design/daily-ui"
            render={() => <ProjectPage {...DailyUi} />}
          />
          <Route
            path="/design/hangul-printing"
            render={() => <ProjectPage {...HangulPrinting} />}
          />
          {/* <Route path="/design/autonomous-rov" component={AutonomousRov} /> */}
        </Switch>
      </div>
    );
  }
}

export default Design;
