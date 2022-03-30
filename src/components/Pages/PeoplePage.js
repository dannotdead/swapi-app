import React, {Component} from 'react';
import {PersonDetails, PersonList} from '../SWComponents';
import Row from '../Row';

class PeoplePage extends Component {

  state = {
    selectedItem: null
  }

  renderItem = ({ name }) => {
    return `${name}`
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  }

  render() {
    const { selectedItem } = this.state

    return (
      <Row
        list={
          <PersonList
            renderItem={ this.renderItem }
            onItemSelected={ this.onItemSelected }
          />
        }
        details={ <PersonDetails itemId={ selectedItem } /> }
      />
    );
  }
}

export default PeoplePage;