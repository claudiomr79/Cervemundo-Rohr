import { createContext, useContext, useState} from 'react';

const contexto = createContext()
export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
    const [totalPrice,setTotalPrice] = useState(0)
    const [totalQuantity,setTotalQuantity] = useState(0)
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {

        const product_copy = {...item}
        product_copy.quantity = quantity
        
        setTotalQuantity((totalQuantity + quantity))
        setTotalPrice((totalPrice + ((product_copy.price)*quantity)))
        if (!isInCart(item.id)){
            setCart([...cart, product_copy])
        }else{
                cart.map(itemInCart =>  {
                    if (itemInCart.id ==  item.id){
                        itemInCart.quantity = itemInCart.quantity + quantity
                        setCart(cart)
                    }
                })
        }
    }

    const removeItem = (id,quantity,price) => {
        let filtered_cart = cart.filter(item => item.id !== id);
        setCart(filtered_cart);
        setTotalQuantity(totalQuantity - quantity);
        setTotalPrice(totalPrice - (quantity * price));

    }

    const clear = ( ) => {
        setCart([])
        setTotalQuantity(0)
        setTotalPrice(0)
    }
    
    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const valorDelContexto = {
        totalPrice,
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

