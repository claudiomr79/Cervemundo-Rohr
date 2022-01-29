import React from 'react'
import { useContexto } from "../context/myContext"
import { Badge } from 'react-bootstrap'

export const CartWidget = () => {
  const { totalQuantity } = useContexto()
  
  return (
    <div>
        <span className="nav-link">
            <i className="large material-icons"> shopping_cart </i>
            {(totalQuantity) ? 
                  (
                  <span><Badge pill bg="danger">
                                {(totalQuantity)}
                        </Badge>
                  </span>
            ) : (null)  
            }
            
        </span>    
    </div>
  );
}
