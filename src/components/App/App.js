import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

import 'bootswatch/dist/slate/bootstrap.min.css'
import './App.css'

class App extends Component {

  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const { selectedPerson } = this.state

    return (
        <div className='container'>
          <Header />
          <RandomPlanet />

          <div className='d-flex justify-content-between mt-3'>
            <div className='col-md-3'>
              <ItemList onItemSelected={ this.onPersonSelected }/>
            </div>
            <div className='col-md-8'>
              <PersonDetails personId={ selectedPerson }/>
            </div>

          </div>
        </div>
    );
  }
}

export default App;