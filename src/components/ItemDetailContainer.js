import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase/firebase"
import ItemDetail from './ItemDetail'
import Loader from './loader/Loader'

export default function ItemDetailContainer() {
    const { id } = useParams();

    const [item, setItem] = useState(null);
    const  [load,setLoad] = useState();
    
    useEffect(() => {
        setLoad(true)
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
            .finally(() => {setLoad(false)})

    }, [id])   

    return (
        <div>
            {load ? <Loader /> :
           ( item != null ? <ItemDetail item={item} /> : null)}
        </div>
    )
}
