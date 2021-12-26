import React, { useState } from 'react'
import { Card, Container , Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'


export default function ItemDetail({item}) {
  //aca uso stock con un estado para practica solamente...después calculo se usa context
  //y traigo los valores de la base de datos
   let [stock,setStock]= useState(20);
   let [mostrarCount, setMostrar] = useState(true);
  
   const onAdd = (quantityToAdd) => {
    console.log('La quantityToAdd agregada es' + quantityToAdd);
    //console.log(stock)
    setStock(stock-quantityToAdd)//lo uso ahora para simular
    setTimeout(() => {
        setMostrar(!mostrarCount)
    }, 1500);
   } 
   
   return (
     <>
        {
            (mostrarCount) ? 
             ((!item) ? <h6>Cargando...</h6> :
                (
                <Container  style={{padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Card border="primary" style={{ width: "20rem"}}>
                    <Card.Img variant="top" src={item.image} height="250px" />
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
                </Container>
                  
                ))
                 :
                (
                        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <span>Termine su compra</span><br/>
                            <Nav as={ NavLink } to="/cart" >
                            <button type="submit" className="btn btn-primary">
                                Terminar compra
                             </button>         
                            </Nav>        
                        </Container>
                )
        }
            
     </>
    )
}
  
