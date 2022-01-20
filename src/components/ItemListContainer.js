import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { db } from './firebase'
import { getDocs, query, collection , where , orderBy} from 'firebase/firestore'


export const ItemListContainer = () => {
   
    let [list,setList]= useState([]);
    const { name } = useParams();

   useEffect(() => {
       const productsCollection = collection(db,"products")
       
       if (name) {

        const consult = query(productsCollection,where("category","==",name),orderBy("price"))
        getDocs(consult)
            .then(({ docs }) => {
                setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
                console.log(error)
            })

    } else {
        const consult = query(productsCollection,orderBy("price"))

        getDocs(consult)
            .then(({ docs }) => {
                setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
                console.log(error)
            })
    }
   },[name])

    return (
        <div>
           <ItemList items={list}/> 
        </div>
    )
}
