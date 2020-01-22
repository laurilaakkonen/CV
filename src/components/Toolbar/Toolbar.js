import React from 'react'

import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
  <nav className="toolbar_navigation">
    <div className="toolbar_logo"><a href="/">Lauri Laakkonen</a></div>
    <div className="toolbar_logo_bonus">the web app CV</div>
    <div className="space" />
    <div className="toolbar_navigation-items">
      <ul>
        <li><a href="/skills_and_experience">Skills and experience</a></li>
        <li><a href="/previous_work">Previous work</a></li>
        <li><a href="/contact">Contact me</a></li>
      </ul>
    </div>
  </nav>
  </header>
);

export default toolbar;

    {/*<Link to="/contact">Contact me</Link></li>*/}
