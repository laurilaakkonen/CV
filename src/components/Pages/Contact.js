import React from 'react'
import lauripic from './Lauripic.jpg'

const contact = props => (
  <div>
    <div className="parallel">
      <div>
      </div>
      <div>
      <h2>Contact me!</h2>
        <div className="maintext">
      If you are interested or have more questions for me, you can me reach me via
      email or by phone
      <br></br>
      <br></br>
      lauri.p.laakkonen(a)gmail.com
      <br></br>
      <br></br>
      +358 44 975 1190
        </div>
      </div>
      <div className="lauripic">
          <img src={lauripic} width="380" height="485"/>
      </div>
      <div>
      </div>
    </div>
  </div>
);

export default contact;
