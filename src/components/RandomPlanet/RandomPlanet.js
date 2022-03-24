import React, { Component } from 'react'

import SwapiService from '../../services/swapiService'

import './RandomPlanet.css'
import Spinner from '../Spinner';

class RandomPlanet extends Component {

  swapiService = new SwapiService()

  constructor() {
    super()

    this.updatePlanet()
  }

  state = {
    planet: {},
    loading: true
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2)
    this
      .swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {

    const { planet, loading } = this.state

    const spinner = loading ? <Spinner /> : null
    const content = !loading ? <PlanetView planet={planet}/> : null

    return (
        <div className='container d-flex random-planet'>
          { spinner }
          { content }
        </div>
    );
  }
}

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet

  return (
      <>
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
      </>
  )
}

export default RandomPlanet;