"use client"

import React, { useState } from 'react'
import Item from './(components)/item.component';
import Utilities from './(logic)/utility';
import { IItem } from './(logic)/interfaces';
import _ from 'lodash'

export default function Page() {
  const _utilities = Utilities();
  const [items, setItems] = useState([])

  const deleteButtonHander = id => {
    const remainingItems = _.reject(items, item => item.id === id)
    setItems([...remainingItems])
  }

  const addNewItemHandler = value => {
    let _item: IItem = {
      id: _utilities.createUniqueID(),
      value
    }
    setItems([...items, _item])
  }

  function displayItems(_items: Array<IItem>) {
    if (_items.length === 0) {
      return <div>No Items Available</div>
    }

    return _items.map(item => {
      return <Item key={item.id} {...item} onDeleteButtonClick={deleteButtonHander}></Item>
    })
  }

  return (
    <div className="container">
      <div className="item-list">
        {displayItems(items)}
        <Item onAddButtonClick={addNewItemHandler}></Item>
      </div>
    </div>
  );
}