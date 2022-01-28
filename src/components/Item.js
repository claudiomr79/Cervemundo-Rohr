import React from 'react'
import { Card , Button, Row, Col, Badge} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Item({item}) {
    return (
            <Card className="mx-auto p-1 h-100 rounded-0 border-primary shadow" 
            style={{ maxWidth: '300px'}}>
              <Card.Body className="px-1 pb-1 pt-0">
                <Row>
                  <Col xs="4" md="7" className="px-md-5">
                      <div style={{width: '100%'}}>
                        <Card.Img variant="top" src={item.pictureUrl}  /> 
                      </div>
                  </Col>
                  <Col xs="8" md="5" className="d-flex flex-column justify-content-start px-3">
                      <Card.Title>{item.title}</Card.Title>
                       <NavLink to={'/category/'+item.category}>
                          <Badge bg="dark">
                              {item.category}
                          </Badge>
                       </NavLink>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="fs-5 ps-0 pt-0 mt-1 border-0 rounded-0">
                <Row className="m-1 d-flex align-items-center">
                    <Col xs="6" className="ps-3"> 
                       <Button variant="outline-dark" disabled>${item.price}</Button>  
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <Button as={NavLink} to={'/item/'+item.id} variant="primary">Comprar</Button>
                    </Col>
                </Row>
              </Card.Footer>
            </Card>
    );
}
