import React from 'react'
import { useContexto } from "./myContext"


export const CartWidget = () => {
  const { totalQuantity } = useContexto()
  
  return (
    <div>
        <span className="nav-link">
            <i className="large material-icons"> shopping_cart </i>
            { totalQuantity }
        </span>
    </div>
  );
}
