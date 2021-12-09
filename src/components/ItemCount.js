import React from 'react'
import { useState } from 'react'
import {Card, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({stock,initial}) {
    let [contador, setContador] = useState(initial); //manejo de estado

    const sumar = () => {
        if (contador < stock)
            setContador(contador + 1)
    }

    const restar = () => {
        if (contador > 1)
            setContador(contador - 1)
    }

    const onAdd = () => {
        setContador(initial)
        notify()
    }

    const notify = () => toast.info('Agregado al carrito!');//toast

    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="./cerveza-artesanal.jpg" />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Cerveza Rubia artesanal</Card.Title>
            <Card.Text>Botella 500 ml</Card.Text>
            <div id="contador">
                <button type="button" class="btn btn-primary" onClick={sumar}>
                +
                </button>
                <h2>{contador}</h2>
                <button type="button" class="btn btn-primary" onClick={restar}>
                -
                </button>
            </div>
            
            <button type="button" class="btn btn-primary" onClick={onAdd}>
              Agregar al carrito
            </button>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
            />
          </Card.Body>
        </Card>
      </div>
    );
}
