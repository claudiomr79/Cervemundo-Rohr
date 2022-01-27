import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({stock,initial,onAdd}) {
    let [contador, setContador] = useState(initial); 

    const notify = (contador) => toast.info(`Agregado al carrito ${contador} unidades`);
    
    const sumar = () => {
        if (contador < stock)
            setContador(contador + 1)
    }

    const restar = () => {
        if (contador > 1)
            setContador(contador - 1)
    }

    const agregarAlcarrito = () => {
        setContador(initial)
        notify(contador)
        onAdd(contador)
    }

    return (
      <>
            <div id="contador">
                <button type="button" className="btn btn-danger" onClick={restar}>
                -
                </button>
                <h4>{contador}</h4>
                <button type="button" className="btn btn-danger" onClick={sumar}>
                +
                </button>
            </div>
            <div id="agregar-carrito">
              <button type="button" className="btn btn-danger" onClick={agregarAlcarrito}>
                Agregar al carrito
              </button>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={1000}
               hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
            />
      </>
    );
}
