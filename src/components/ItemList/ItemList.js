import React, { Component } from 'react'

import SwapiService from '../../services/swapiService'
import Spinner from '../Spinner'

import './ItemList.css'

class ItemList extends Component {

  swapiService = new SwapiService()

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService
        .getAllPeoples()
        .then((peopleList) => {
          this.setState({
            peopleList
          })
        })
  }

  renderItems = (array) => {
    return array.map(({ id, name }) => {
      return (
        <li
          key={id}
          className='list-group-item list-group-item-action item'
          onClick={() => this.props.onItemSelected(id)}
        >
          { name }
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state

    if (!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList)

    return (
        <ul className='item-list list-group'>
          { items }
        </ul>
    );
  }
}

export default ItemList;