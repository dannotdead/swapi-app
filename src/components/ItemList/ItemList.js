import React from 'react'
import PropTypes from 'prop-types';

import './ItemList.css'

const ItemList = (props) =>  {
  const { data, renderItem, onItemSelected } = props

  const items = data.map((item) => {
    const { id } = item
    const label = renderItem(item)

    return (
        <li
            key={id}
            className='list-group-item list-group-item-action item'
            onClick={() => onItemSelected(id)}
        >
          { label }
        </li>
    )
  })

  return (
      <ul className='item-list list-group'>
        { items }
      </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired
}

export default ItemList