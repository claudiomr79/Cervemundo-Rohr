import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'

const detalles = [
    {id:1,title:"cerveza rubia 500 ml",price:100,stock:20,image:"/rubia.jpg"},
    {id:2,title:"cerveza negra 500 ml",price:120,stock:20,image:"/negra.jpg"},
    {id:3,title:"cerveza roja 500 ml",price:120,stock:20,image:"/roja.jpg"},
    {id:4,title:"Barril cerveza rubia 30 l",price:1000,stock:20,image:"/barril 30l rubia.png"},
    {id:5,title:"Barril cerveza negra 30 l",price:1100,stock:20,image:"/barril 30l negra.png"},
    {id:6,title:"Barril cerveza roja 30 l",price:1200,stock:20,image:"/barril 30l roja.png"},
]

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    console.log('id:'+id);
    
    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
                res(detalles);
            },2000)
         })
         promesa
            .then(i => setItem(i[id-1]))
            .catch(() => {console.log('Hubo una falla en la carga')});
    }, [id])   

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}
