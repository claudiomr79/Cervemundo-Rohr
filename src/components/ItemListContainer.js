import React from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = (props) => {
    
   const onAdd = (cantidad) => {
    console.log(cantidad)
   } 
    

    return (
        <div>
           <h4 style={{ textAlign:"center" }}>{props.greeting}! </h4>
           <div id= "centrar">
                <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
           </div>
        </div>
    )
}
