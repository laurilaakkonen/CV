import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Toolbar  from "./components/Toolbar/Toolbar"
import Botbar   from "./components/Botbar/Botbar"
import Main    from "./components/Pages/Main"
import Skills   from "./components/Pages/Skills"
import Work     from "./components/Pages/Work"
import Contact  from "./components/Pages/Contact"

class App extends Component {
  render() {
  return (
    <div className ="App">
      <Toolbar />
      <main style={{marginTop: '60px', mariginBot: '50px'}}>
      <br></br>
      <br></br>

      <Router>
      <div>
        <Switch>
          <Route path="/skills_and_experience">
            <Skills />
          </Route>
          <Route path="/previous_work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>

      </main>
      <Botbar />
    </div>
    );
  }
}

export default App;
