import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Code from "../Code/Code";

import "./Main.scss";

class Main extends React.Component {
  state = {};
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path={"/edci-335-website/"} component={Home} />
          <Route path="/edci-335-website/code" component={Code} />
        </Switch>
      </div>
    );
  }
}

export default Main;
