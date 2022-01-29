import { useContexto } from "../context/myContext"
import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Cart = () => {
    
    const { cart, clear , removeItem, totalPrice } = useContexto()

    return (
        <div className="p-5 d-flex flex-column justify-content-center align-items-center">
            {cart.length > 0 ? (
                <>
                    <h4>Sus productos en el Carrito</h4>
                    <ul className="d-flex flex-column justify-content-center align-items-center">
                        {cart.map((product, index) => {
                            return (
                                <li key={index} style={{listStyle: 'none'}}>
                                    <h6>
                                        <span className="p-1" style={{ color: 'red'}}><b>{product.quantity}</b></span>
                                        {product.title} 
                                        <img src={product.pictureUrl} alt="producto" className="p-1" style={{ width: '20%', height:'20%'}}></img>
                                        ${product.price} 
                                        <NavLink  className="p-2" to="/cart" onClick={() => removeItem(product.id,product.quantity,product.price)}>
                                            <Button variant="danger">Eliminar Producto</Button>
                                        </NavLink><hr/>
                                    </h6>
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                          <b>Precio Total $ 
                          {totalPrice}
                          </b>
                        <hr/>
                        <div className="m-1 d-flex flex-row justify-content-around align-items-center flex-wrap">
                            <NavLink id="botones-sep" to="/" >
                                <Button variant="primary">Seguir Comprando</Button>
                            </NavLink>  
                            <NavLink id="botones-sep" to="/cart" onClick={clear}>
                                <Button variant="primary">Vaciar carrito</Button>
                            </NavLink>
                            <NavLink id="botones-sep" to="/form">
                                <Button variant="primary">Terminar Compra</Button>
                            </NavLink>
                        </div>
                    </div>    
                </>
            ) : (
                <>
                    <h4>No hay productos en el carrito</h4>
                    <NavLink className="p-4" to="/" >
                         <Button variant="primary">Ir a comprar</Button>
                    </NavLink>     
                </>
            )}
        </div>
    )
}

export default Cart;