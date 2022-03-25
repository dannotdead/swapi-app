import React, { Component } from 'react'

import './ItemDetails.css'

class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  onPersonLoaded = (item) => {
    const { getImageURL } = this.props

    this.setState({
      item,
      image: getImageURL(item)
    })
  }

  updateItem() {
    const { itemId, getData } = this.props

    if (!itemId) {
      return
    }

    getData(itemId)
      .then(this.onPersonLoaded)
  }

  render() {
    const { item, image } = this.state

    if (!item) {
      return <span>Select a person from a list</span>
    }

    const content = (
      <PersonView
        item={ item }
        image={ image }
        children={this.props.children}
      />
    )

    return (
        <div className='container d-flex person'>
          { content }
        </div>
    );
  }
}

const PersonView = ({ item, image, children }) => {
  const { name } = item

  return (
    <>
      <div className='col-4'>
        <img
            src={ image }
            alt='character'
        />
      </div>

      <div className='col-8'>
        <h4 className='text-light'>{ name }</h4>
        <ul className='list-group list-group-flush'>
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item })
            })
          }
        </ul>
      </div>
    </>
  )
}

const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span>{ label }: </span>
      <span>{ item[field] }</span>
    </li>
  )
}

export {
  ItemDetails,
  Record
}