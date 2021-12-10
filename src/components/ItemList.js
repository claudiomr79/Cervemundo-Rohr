import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    return (
        <div>
             {items.map((item) => (<Item  item={item} />))}
        </div>
    )
}
