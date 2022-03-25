import React from 'react'

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

export default ItemList