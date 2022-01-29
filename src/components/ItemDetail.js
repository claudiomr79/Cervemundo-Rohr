import React, { useState } from 'react'
import { Card, Container , Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useContexto } from "./context/myContext"

export default function ItemDetail({item}) {
    const { addItem } = useContexto()

   let [stock,setStock]= useState(item.stock);
   let [mostrarCount, setMostrar] = useState(true);
    


  
   const onAdd = (quantityToAdd) => {
    addItem(item,quantityToAdd)
    setStock(stock)
    setTimeout(() => {
        setMostrar(!mostrarCount)
    }, 1500);
   } 
   
   return (
     <>
        {
            (mostrarCount) ? 
            (<Container className="mt-1 pt-5 d-flex flex-column justify-content-center align-items-center">
                <Card>
                <Card.Img src={item.pictureUrl} className="mx-auto w-auto" />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    Descripcion: {item.description}
                    <div className="d-flex flex-row justify-content-center h4"> $ {item.price}</div>
                    </Card.Text>
                    <Card.Footer>
                        <div>
                            <ItemCount stock={stock} initial={1} onAdd={onAdd}/> 
                            <small>{`Quedan ${item.stock} unidades en stock!`}</small>
                        </div>
                    </Card.Footer>
                </Card.Body>
                </Card>
            </Container>)
                        :
            (<Container className="mt-5 d-flex flex-column justify-content-end align-items-center">
                    <Nav  className="p-2" as={ NavLink } to="/" >
                    <button type="submit" className="btn btn-primary">
                        Seguir comprando
                     </button>         
                    </Nav>        
                    <Nav as={ NavLink } to="/cart" >
                    <button type="submit" className="btn btn-primary">
                        Ir al carrito
                     </button>         
                    </Nav>    
                </Container>
            )
        }
     </>
    )
}
  
