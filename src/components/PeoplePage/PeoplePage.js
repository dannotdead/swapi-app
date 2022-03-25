import React, {Component} from 'react';

import ItemDetials from '../ItemDetails';
import ItemList from '../ItemList';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/swapiService';
import Row from '../Row';

import './PeoplePage.css'

class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  }


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  renderItem = ({ name, birthYear }) => {
    return `${name} (${birthYear})`
  }

  render() {
    const { selectedPerson } = this.state

    const itemList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData={ this.swapiService.getAllPeoples }
        renderItem={ this.renderItem }
      />
    )

    const personDetails = (
      <ItemDetials itemId={ selectedPerson }/>
    )

    return (
        <ErrorBoundary>
          <Row list={ itemList } details={ personDetails }/>
        </ErrorBoundary>
    );
  }
}

export default PeoplePage;