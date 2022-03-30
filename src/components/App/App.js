import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator';

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'

import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/swapiService';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../Pages';

class App extends Component {

  swapiService = new SwapiService()

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }

  renderItem = ({ name }) => {
    return `${name}`
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <SwapiServiceProvider value={ this.swapiService }>
        <div className='container'>
          <Header />

          <RandomPlanet />

          <PeoplePage />

          <PlanetsPage />

          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    );
  }
}

export default App;