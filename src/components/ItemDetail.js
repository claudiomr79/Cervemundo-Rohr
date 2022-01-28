import React, { useState,useEffect } from 'react'
import { Card, Container , Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useContexto } from "./myContext"
import { collection, doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"


export default function ItemDetail({item}) {
    const { addItem } = useContexto()
  
   let [stock,setStock]= useState(item.stock);
   let [mostrarCount, setMostrar] = useState(true);
    
   let id= item.id;

   useEffect(() => {
    const productsCollection = collection(db, "products")
    const refDoc = doc(productsCollection, id)
    
    updateDoc(refDoc, {
        "stock": stock
    });
   }, [stock]);
   

   const onAdd = (quantityToAdd) => {
    addItem(item,quantityToAdd)
    setStock(stock-quantityToAdd)
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
                            <small>{`Quedan ${stock} unidades en stock!`}</small>
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
  
