import React, {Component} from 'react';
import {StarshipDetails, StarshipList} from '../SWComponents';
import Row from '../Row';

class StarshipsPage extends Component {

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
          <StarshipList
            renderItem={ this.renderItem }
            onItemSelected={ this.onItemSelected }
          />
        }
        details={ <StarshipDetails itemId={ selectedItem } /> }
      />
    );
  }
}

export default StarshipsPage;