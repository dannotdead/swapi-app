import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'

class App extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
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

          <PeoplePage />
        </div>
    );
  }
}

export default App;