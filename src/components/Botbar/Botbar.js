import React from 'react'

import './Botbar.css'

const botbar = props => (
  <div class="footer">
  <nav className="toolbar_navigation">
  <div className="toolbar_socials">Socials</div>
    <div className="bottom_space" />
    <div className="toolbar_navigation-items">
      <ul>
        <li><a href="https://github.com/laurilaakkonen" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/lauri-laakkonen/" target="_blank">Linkedin</a></li>
      </ul>
    </div>
  </nav>
  </div>
);

export default botbar;
