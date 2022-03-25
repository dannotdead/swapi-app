import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator';

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'

import {
  PersonDetails,
  PersonList, PlanetDetails,
  PlanetList, StarshipDetails,
  StarshipList,
} from '../SWComponents';

class App extends Component {


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
        <div className='container'>
          <Header />
          <RandomPlanet />

          {/*<PeoplePage />*/}

          <PersonDetails itemId={ 11 } />
          <PlanetDetails itemId={ 5 } />
          <StarshipDetails itemId={ 4 } />

          <PersonList renderItem={ this.renderItem }/>
          <StarshipList renderItem={ this.renderItem }/>
          <PlanetList renderItem={ this.renderItem }/>
        </div>
    );
  }
}

export default App;