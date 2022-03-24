import React, {Component} from 'react';
import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';

class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const { selectedPerson, hasError } = this.state

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className='d-flex justify-content-between mt-3'>
        <div className='col-md-3'>
          <ItemList onItemSelected={ this.onPersonSelected }/>
        </div>
        <div className='col-md-8'>
          <PersonDetails personId={ selectedPerson }/>
        </div>
      </div>
    );
  }
}

export default PeoplePage;