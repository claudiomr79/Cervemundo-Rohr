import React from 'react'
import { Card , Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Item({item}) {
    return (
      <div style={{margin:'10px', padding: '20px', display: 'flex',justifyContent: 'center' }}>
        <Card as={NavLink} to={'/item/'+item.id} border="danger" style={{ width: '80%', height:'80%'}}>
          <Card.Img variant="top" src={item.pictureUrl} style={{margin: 'auto', width: '50%', height:'50%'}}  />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Precio: $ {item.price}
            </Card.Text>
            <div style={{display: 'flex',justifyContent: 'center' }}>
              <Button variant="primary">Comprar</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}
