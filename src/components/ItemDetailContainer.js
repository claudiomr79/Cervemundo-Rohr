import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"
import ItemDetail from './ItemDetail'



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
