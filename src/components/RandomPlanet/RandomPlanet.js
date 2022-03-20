import React, { Component } from 'react'

import './RandomPlanet.css'

class RandomPlanet extends Component {
  render() {
    return (
        <div className='container d-flex random-planet'>
          <div className='col-4'>
            <img src='https://starwars-visualguide.com/assets/img/planets/12.jpg' alt='random-planet'/>
          </div>

          <div className='col-8'>
            <h4 className='text-light'>Header</h4>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Luke Skywalker
              </li>
              <li className='list-group-item'>
                Dart Vader
              </li>
              <li className='list-group-item'>
                R2-D2
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default RandomPlanet;