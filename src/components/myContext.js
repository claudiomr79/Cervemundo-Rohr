import { createContext, useContext, useState} from 'react';

const contexto = createContext()
export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
   // const [precio_total,setPrecioTotal] = useState(0)
    const [total_quantity,setTotalQuantity] = useState(0)
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {
        console.log("Soy el provider")

        const product_copy = {...item}
        product_copy.quantity = quantity

        setTotalQuantity(total_quantity + quantity)

        (!isInCart) ? (
            setCart([...cart, product_copy])
        ):
        (
            setCart(cart)
        )
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    const clear = ( ) => {
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const valorDelContexto = {
        total_quantity , 
        cart , 
        addItem , 
        removeItem ,
        clear
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}
export default CustomProvider;

