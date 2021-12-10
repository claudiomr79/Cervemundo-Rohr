import React from 'react'
import {Card} from 'react-bootstrap'


export default function Item({item}) {
    return (
      <div id="centrar">
        <Card border="primary" style={{ width: "18rem"}}>
          <Card.Img variant="top" src={item.pictureUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Precio: $ {item.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}
