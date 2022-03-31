import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorIndicator from '../ErrorIndicator';

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'

import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/swapiService';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Router>
          <div className='container'>
            <Header />

            <RandomPlanet />
            <Routes>
              <Route path='/' element={ <h2>Welcome to SwapiApp</h2> }/>
              <Route path='/peoples' element={ <PeoplePage /> }/>
              <Route path='/planets' element={ <PlanetsPage /> }/>
              <Route path='/starships' element={ <StarshipsPage /> }/>
            </Routes>

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;