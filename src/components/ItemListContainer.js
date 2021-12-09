import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = (props) => {
    
   
    

    return (
        <div>
           <h4 style={{ textAlign:"center" }}> {props.greeting}! </h4>
           
           <div id= "centrar">
                <ItemCount stock={5} initial={1}/> 
           </div>
        </div>
    )
}
