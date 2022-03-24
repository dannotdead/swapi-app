import React, { Component } from 'react'

import SwapiService from '../../services/swapiService'

import './RandomPlanet.css'
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

class RandomPlanet extends Component {

  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2)
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  }

  render() {

    const { planet, loading, error } = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <PlanetView planet={planet} /> : null

    return (
        <div className='container d-flex random-planet'>
          { errorMessage }
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