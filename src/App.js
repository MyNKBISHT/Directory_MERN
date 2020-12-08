import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header/header";
import Home from "./containers/home/home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}
