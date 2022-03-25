import React, { Component } from 'react'

import Spinner from '../Spinner'

import './ItemList.css'

class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      })
  }

  renderItems = (array) => {
    return array.map((item) => {
      const { id } = item
      const label = this.props.renderItem(item)

      return (
        <li
          key={id}
          className='list-group-item list-group-item-action item'
          onClick={() => this.props.onItemSelected(id)}
        >
          { label }
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList)

    return (
        <ul className='item-list list-group'>
          { items }
        </ul>
    );
  }
}

export default ItemList;