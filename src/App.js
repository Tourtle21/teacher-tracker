import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/classes" component={Classes} />
      </Switch>
    </Router>
  );
}

export default App;
