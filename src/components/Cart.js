import { useContexto } from "./myContext"

const Cart = () => {
    
    const { cart, clear , removeItem } = useContexto()
    console.log(cart)

    return (
        <div>
            Soy Carrito
        </div>
    )
}

export default Cart;