import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    return (
             <>
                <ul>
                   {items.map((item, id) =>
                    (<li key={id} style={{listStyle:'none'}}><Item item={item} /></li>))}
                </ul>
             </>
    )
}
