import React from "react";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";

ReactGA.initialize("UA-144851049-1");
const history = createHistory();
history.listen(() => {
  ReactGA.pageview(window.location.pathname);
});
class RouteContainer extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return <Router history={history}>{this.props.children}</Router>;
  }
}

export default RouteContainer;
