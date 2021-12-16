import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    return (
             <>
                <ul>
                   {items.map((item) =>
                    (<li key={item.id} style={{listStyle:'none'}}><Item item={item} /></li>))}
                </ul>
             </>
    )
}
