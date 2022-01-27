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
            (<Container  style={{marginTop:'50px' ,padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Card border="primary">
                <Card.Img src={item.pictureUrl} style={{margin: 'auto', width: '20%', height:'20%'}} />
                <Card.Body 
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{color: 'red'}}>
                    Precio: $ {item.price}
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
            (<Container style={{marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Nav  style={{ padding: '8px'}} as={ NavLink } to="/" >
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
  
