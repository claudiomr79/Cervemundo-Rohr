import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"
import ItemDetail from './ItemDetail'


// const detalles = [
//     {id:1,title:"Cerveza rubia 500 ml",price:100,stock:20,image:"/rubia.jpg"},
//     {id:2,title:"Cerveza negra 500 ml",price:120,stock:20,image:"/negra.jpg"},
//     {id:3,title:"Cerveza roja 500 ml",price:120,stock:20,image:"/roja.jpg"},
//     {id:4,title:"Barril cerveza rubia 30 l",price:1000,stock:20,image:"/barril 30l rubia.png"},
//     {id:5,title:"Barril cerveza negra 30 l",price:1100,stock:20,image:"/barril 30l negra.png"},
//     {id:6,title:"Barril cerveza roja 30 l",price:1200,stock:20,image:"/barril 30l roja.png"},
// ]

export default function ItemDetailContainer() {
    const { id } = useParams();

    const [item, setItem] = useState(null);

    
    useEffect(() => {
        
        const productsCollection = collection(db, "products")
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc)
            .then((result) => {
                const itemWithId = {...result.data(), id}
                setItem(itemWithId)
            })
            .catch((error) => {
                console.error(error)
            })


    }, [id])   

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}
