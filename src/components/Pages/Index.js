import React from 'react'
import lauripic from './Lauripic.jpg'
import './Index.css'

const index = props => (
  <div>
  hello I am index
  <div className="parallel">
    <div>
    <h2>Header</h2>
    I am text next to picture
    </div>
      <div className="lauripic">
          <img src={lauripic} width="380" height="485"/>
      </div>
  </div>
  </div>
);

export default index;
