import React from 'react'
import {Card, Container} from 'react-bootstrap'

export default function ItemDetail({item}) {
    // ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, 
    //una foto y el precio.
   // Desarrolla la vista de detalle expandida del producto con su imagen, título, descripción y precio
    return (
        <>
            { (!item) ? <h6>Cargando...</h6> :
            (<Container style={{padding: '20px', display: 'flex',justifyContent: 'center' }}>
                <Card border="primary" style={{ width: "18rem"}}>
                <Card.Img variant="top" src={item.image}  />
                <Card.Body 
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{color: 'red'}}>
                    Precio: $ {item.price}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Container>)} 
        </>
    )
}
  
