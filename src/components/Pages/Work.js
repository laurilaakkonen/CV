import React from 'react'
import lauripic from './Lauripic.jpg'
import './Work.css'

const work = props => (
  <div>
    <div className="parallel">
      <div>
      </div>
      <div>
        <div className="workmaintext">
        <h2>Previous work</h2>
        <h3>Camera car driver, Pro-Source, 2018 & 2019 </h3>
        <ul>
          <li>I worked full for 8 months total for two summers</li>
          <li>This was a part of Google’s Google Street View project</li>
          <li>I drove a camera car and I maintained a camera system</li>
          <li>It was my responsibility to reserve the hotels I were to stay in</li>
        </ul>
        <h3>Assembler, Valmet Automotive, 2015</h3>
        <ul>
          <li>Worked full time for 5 months total</li>
          <li>Job included assembly of car components as a part of team</li>
        </ul>
        <h2>Volunteer experience</h2>
        <h3>Member of a board, Digit ry, 2018 & 2019</h3>
        <ul>
          <li>I was elected to be a member of a board for a student organization
          of Information technology students in Turku</li>
          <li>This included weekly meetings, planning and organizing events,
          delegation of work and leading post event development discussions.</li>
        </ul>
        <h3>Tutoring, Digit ry, 2016, 2017 & 2019</h3>
        <ul>
          <li>As a student tutor I helped freshmen get started in their university life and studies</li>
        </ul>
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

export default work;
