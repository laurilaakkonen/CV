import React from 'react'
import lauripic from './Lauripic.jpg'
import './Main.css'

const main = props => (
  <div>
    <div className="parallel">
      <div>
      </div>
      <div>
      <h2>Hello, here’s a little bit about me!</h2>
        <div className="maintext">
        My name is Lauri Laakkonen and I’m a student at the university of Turku studying Information technology.
        I was originally born in Uusikaupunki in 1995 and I currently live in Turku.
        <br></br> <br></br>
        I’m laid back, social and I sometimes like to joke around, but I know how to keep things professional.
        I’m also honest and open about things. My previous employer has called me reliable and hard working.
        <br></br> <br></br>
        On my free time I like to cook, play videogames and go to the gym
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

export default main;
