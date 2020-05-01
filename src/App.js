import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCIxQyV0VSvnQY6Hsrg4SjYjcn0hWiF4B0",
    authDomain: "teacher-tracker-1b566.firebaseapp.com",
    databaseURL: "https://teacher-tracker-1b566.firebaseio.com",
    projectId: "teacher-tracker-1b566",
    storageBucket: "teacher-tracker-1b566.appspot.com",
    messagingSenderId: "477834957440",
    appId: "1:477834957440:web:2d6cb0e177b23c63e50c65",
    measurementId: "G-NT12D2KCVM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

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
