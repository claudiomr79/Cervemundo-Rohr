import React from 'react'

export const CartWidget = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
            <i className="large material-icons"> search </i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
            <i className="large material-icons"> shopping_cart </i>
        </a>
      </li>
    </>
  );
}
