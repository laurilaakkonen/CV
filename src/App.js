import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar"

class App extends Component {
  render() {
  return (
    <div className ="App">
      <Toolbar />
      <main style={{marginTop: '60px'}}>
      <p>Here is some text</p>
      </main>
    </div>
    );
  }
}

export default App;
