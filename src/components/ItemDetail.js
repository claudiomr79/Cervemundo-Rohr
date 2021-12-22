import React, {useState} from 'react'
import {Card, Container} from 'react-bootstrap'
import ItemCount from './ItemCount'


export default function ItemDetail({item}) {
  //aca uso stock con un estado para practica solamente...después calculo se usa context
  //y traigo los valores de la base de datos
   let [stock,setStock]= useState(20);
  
   const onAdd = (cantidad) => {
    console.log('La cantidad agregada es' + cantidad);
    //console.log(stock)
    setStock(stock-cantidad)//lo uso ahora para simular
   } 
   
   return (
        <>
            { (!item) ? <h6>Cargando...</h6> :
            (
            <Container  style={{padding: '20px', display: 'flex',justifyContent: 'center' }}>
                <Card border="primary" style={{ width: "20rem"}}>
                <Card.Img variant="top" src={item.image} style={{ width: "20rem"}} />
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
            )} 
        </>
    )
}
  
