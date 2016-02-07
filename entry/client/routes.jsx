import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, IndexRoute } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';

import AccountsUIWrapper from "shared/AccountsUIWrapper";
import Home from "Home/routes";
import Settings from "Settings/routes";
import Other from "Other/routes";
import Nav from "Nav/components/Nav";

const App = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
})

const rootRoute = {
  component: "div",
  childRoutes: [{
    path: "/",
    component: App,
    indexRoute: Home,
    childRoutes: [
      Settings, 
      Other
    ]
  }]
}

Meteor.startup(function () {
  ReactDOM.render(
    <Router history={createBrowserHistory()} routes={rootRoute} />,
    document.getElementById("app")
  )
})