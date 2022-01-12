import React from 'react'
import { useContexto } from "./myContext"


export const CartWidget = () => {
  const { totalQuantity } = useContexto()
  
  return (
    <div>
        <span className="nav-link">
            <i className="large material-icons"> shopping_cart </i>
            {(totalQuantity) ? 
                  (<span style={{ position: 'relative',
                                  bottom: '8px',
                                  right:'8px',
                                  background: 'red',
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '100%',
                                  color: 'white',
                                  padding: '5px',
                                  margin: '5px'}}>
      {(totalQuantity)}
      </span>) : (null)
            }
            
        </span>    
    </div>
  );
}
