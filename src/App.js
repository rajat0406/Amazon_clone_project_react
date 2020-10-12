import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout"></Route>
        <Route path="/login"></Route>
        <Route path="/" component={Header}></Route>
      </Switch>
      {/* <div className="App">Lets build clone of a react project ?</div> */}
    </Router>
  );
}

export default App;
