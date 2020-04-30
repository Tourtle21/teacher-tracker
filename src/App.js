import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Classes from './pages/Classes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div>Header</div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/classes" component={Classes} />
      </Switch>
    </Router>
  );
}

export default App;
