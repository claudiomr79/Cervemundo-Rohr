import React from 'react'
import { Card , Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Item({item}) {
    return (
      <div style={{padding: '20px', display: 'flex',justifyContent: 'center' }}>
        <Card as={NavLink} to={'/item/'+item.id} border="primary" style={{ width: "18rem"}}>
          <Card.Img variant="top" src={item.pictureUrl} height="250px"   />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Precio: $ {item.price}
            </Card.Text>
            <Button variant="primary">Ver detalles</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
