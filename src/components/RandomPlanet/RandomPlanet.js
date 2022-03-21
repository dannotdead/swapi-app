import React, { Component } from 'react'

import SwapiService from '../../services/swapiService'

import './RandomPlanet.css'

class RandomPlanet extends Component {

  swapiService = new SwapiService()

  constructor() {
    super()

    this.updatePlanet()
  }

  state = {
    planet: {}
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet })
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2)
    this
      .swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {

    const { planet:
            { id, name, population, rotationPeriod, diameter }
          } = this.state

    return (
        <div className='container d-flex random-planet'>
          <div className='col-4'>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt='random-planet'
            />
          </div>

          <div className='col-8'>
            <h4 className='text-light'>{ name }</h4>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <span className='random-planet-term'>Population</span>
                <span>{ population }</span>
              </li>
              <li className='list-group-item'>
                <span className='random-planet-term'>Rotation Period</span>
                <span>{ rotationPeriod }</span>
              </li>
              <li className='list-group-item'>
                <span className='random-planet-term'>Diameter</span>
                <span>{ diameter }</span>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default RandomPlanet;