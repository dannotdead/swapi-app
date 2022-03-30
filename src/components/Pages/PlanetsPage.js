import React, {Component} from 'react';
import {PlanetDetails, PlanetList} from '../SWComponents';
import Row from '../Row';

class PlanetsPage extends Component {

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
          <PlanetList
            renderItem={ this.renderItem }
            onItemSelected={ this.onItemSelected }
          />
        }
        details={ <PlanetDetails itemId={ selectedItem } /> }
      />
    );
  }
}

export default PlanetsPage;