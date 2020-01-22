import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Toolbar  from "./components/Toolbar/Toolbar"
import Botbar   from "./components/Botbar/Botbar"
import Index    from "./components/Pages/Index"
import Skills   from "./components/Pages/Skills"
import Work     from "./components/Pages/Work"
import Contact  from "./components/Pages/Contact"

class App extends Component {
  render() {
  return (
    <div className ="App">
      <Toolbar />
      <main style={{marginTop: '60px', mariginBot: '50px'}}>
      <p>Here is some text</p>

      <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>

    <p>Here is some bottomtext</p>

      </main>
      <Botbar />
    </div>
    );
  }
}

export default App;
