import React from 'react'

import {
  HashRouter as Router,
  Link
} from "react-router-dom";

import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
  <Router>
  <nav className="toolbar_navigation">
    <div className="toolbar_logo"><Link  to="/">Lauri Laakkonen</Link></div>
    <div className="toolbar_logo_bonus">the web app CV</div>
    <div className="space" />
    <div className="toolbar_navigation-items">
      <ul>
        <li><Link to="/skills_and_experience">Skills and experience</Link></li>
        <li><Link to="/previous_work">Previous work</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </div>
  </nav>
  </Router>
  </header>
);

export default toolbar;
