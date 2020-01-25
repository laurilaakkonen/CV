import React from 'react'
import lauripic from './Lauripic.jpg'
import './Index.css'

const index = props => (
  <div>
    <div className="parallel">
      <div>
      </div>
      <div>
      <h2>Header</h2>
        <div className="maintext">
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
      I am text next to picture I am text next to picture I am text next to picture
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

export default index;
