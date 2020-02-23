import React, { Fragment } from "react";
import { Interface, Main } from "./views";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/interface" exact component={Interface} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
