import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator';

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'
import ItemDetails from '../ItemDetails';
import SwapiService from '../../services/swapiService';
import Row from '../Row';
import { Record } from '../ItemDetails/ItemDetails';

class App extends Component {

  swapiService = new SwapiService()

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

    if (hasError) {
      return <ErrorIndicator />
    }

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={ getPerson }
        getImageURL={ getPersonImage }
      >
        <Record field='gender' label='Gender' />
        <Record field='birthYear' label='Birth Year' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={ getStarship }
        getImageURL={ getStarshipImage }
      >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails>
    )

    return (
        <div className='container'>
          <Header />
          <RandomPlanet />

          {/*<PeoplePage />*/}
          <Row
            list={ personDetails }
            details={ starshipDetails }
          />
        </div>
    );
  }
}

export default App;