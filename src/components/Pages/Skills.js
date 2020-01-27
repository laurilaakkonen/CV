import React from 'react'
import lauripic from './Lauripic.jpg'

const skills = props => (
  <div>
    <div className="parallel">
      <div>
      </div>
      <div>
        <h2>My skills and experience</h2>
        <div className="maintext">
        I’ve been studying IT from 2015 and I’m estimating I would be graduating in 2021.
        <br></br>
        I’ve yet to gather job experience from own field, but I have done projects in university courses
        and outside of them too, such as this web app which was created with React. You can find more from my&nbsp;
        <a href="https://github.com/laurilaakkonen" target="_blank">Github</a>.
        <br></br>
        I have done projects with <b>Java, JavaScript</b> (e.g. React) and know how to use <b>Git</b>.
        I’m motivated to learn and ready to do my best at any job given to me.
        <br></br> <br></br>
        I’m a native Finnish speaker, proficient in English and have limited proficiency with Swedish.
        <br></br> <br></br>
        I’m looking for a position that can offer me working experience from my own field
        and a good place to learn from more experienced programmers.

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

export default skills;
