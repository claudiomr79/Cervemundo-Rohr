import { useContexto } from "./myContext"
import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Cart = () => {
    
    const { cart, clear , removeItem, totalPrice } = useContexto()
    console.log(cart)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {cart.length > 0 ? (
                <>
                    <h2 style={{backgroundColor:'lightGrey'}}>Sus productos en el Carrito</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        {cart.map((product, index) => {
                            return (
                                <li key={index} style={{listStyle: 'none'}}>
                                    <h6>
                                        <span style={{ color: 'red',padding: '8px'}}><b>{product.quantity}</b></span>
                                        {product.title} 
                                        <img src={product.pictureUrl} style={{padding: '8px', width: '20%', height:'20%'}}></img>
                                        ${product.price} 
                                        <NavLink  style={{padding: '8px'}} to="/cart" onClick={() => removeItem(product.id,product.quantity,product.price)}>
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
                        <NavLink  style={{ padding: '8px'}} to="/" >
                            <Button variant="primary">Seguir Comprando</Button>
                        </NavLink>  
                        <NavLink  to="/cart" onClick={clear}>
                            <Button variant="primary">Vaciar carrito</Button>
                        </NavLink>
                        <NavLink  style={{ padding: '8px'}} to="/" >
                            <Button variant="primary">Terminar compra</Button>
                        </NavLink>  
                    </div>
                </>
            ) : (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <NavLink  to="/" >
                         <Button variant="primary">Ir a comprar</Button>
                    </NavLink>     
                </>
            )}
        </div>
    )
}

export default Cart;