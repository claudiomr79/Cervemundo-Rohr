import { useContexto } from "./myContext"
import {Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Cart = () => {
    
    const { cart, clear , removeItem } = useContexto()
    console.log(cart)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {cart.length > 0 ? (
                <>
                    <h2>Sus productos en el Carrito</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        {cart.map((product, index) => {
                            return (
                                <li key={index} style={{listStyle: 'none', color: 'blue'}}>
                                    <h5>
                                        {product.title} == Precio unitario: ${product.price} == Cantidad: {product.quantity}
                                    </h5>
                                </li>
                            )
                        })}
                    </ul>
                    <NavLink  to="/cart" onClick={clear}>
                         <Button variant="primary">Vaciar carrito</Button>
                    </NavLink>
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