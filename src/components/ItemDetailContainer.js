import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

//Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, utilizando 
//lo visto en la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y 
//lo guarde en un estado propio.

//uso productos ficticios para usar la una API, de la cual traigo un producto en particular

export default function ItemDetailContainer() {
    const [item,setItem] = useState(null);
    
    const fetchApi = async ( ) => {
        try {
            const peticion = await fetch(`https://fakestoreapi.com/products/8`);
            const data = await peticion.json();
            setItem(data);
            console.log(data);
            }
         catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchApi();
       
    }, [])
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}
