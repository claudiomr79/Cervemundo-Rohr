import React from 'react'
import Item from './Item'
import { Container , CardGroup, Col } from 'react-bootstrap'

export default function ItemList({items}) {
    return (
             <>
                 <Container className="mt-5 min-vh-85">
                    <CardGroup>
                      {items.map(item => {
                            return (
                                <Col key={item.id} xs="12" md="6" lg="4" className="p-1" id="item">
                                     <Item item={item} />
                                </Col>
                                    );
                        })
                      }   
                    </CardGroup>  
                 </Container>     
             </>
    )
}
