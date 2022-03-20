import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Header />
          <RandomPlanet />

          <div className='d-flex justify-content-between mt-3'>
            <div className='col-md-3'>
              <ItemList />
            </div>
            <div className='col-md-8'>
              <PersonDetails />
            </div>

          </div>
        </div>
    );
  }
}

export default App;