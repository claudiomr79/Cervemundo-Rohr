import { createContext, useContext, useState} from 'react';

const contexto = createContext()
export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
   // const [precio_total,setPrecioTotal] = useState(0)
    const [totalQuantity,setTotalQuantity] = useState(0)
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {

        const product_copy = {...item}
        product_copy.quantity = quantity
        
        setTotalQuantity((totalQuantity + quantity))
        
        if (!isInCart(item.id)){
            setCart([...cart, product_copy])
        }else{
                cart.map(itemInCart =>  {
                    if (itemInCart.id == item.id){
                        itemInCart.quantity = itemInCart.quantity + quantity
                        setCart(cart)
                    }
                })
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    const clear = ( ) => {
        setCart([])
        setTotalQuantity(0)
    }
    
    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const valorDelContexto = {
        totalQuantity, 
        cart, 
        addItem, 
        removeItem,
        clear
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}
export default CustomProvider;

