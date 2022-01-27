import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { db } from './firebase'
import { getDocs, query, collection , where , orderBy} from 'firebase/firestore'
import Loader from './Loader'



export const ItemListContainer = () => {
    let [list,setList] = useState([]);
    let [load,setLoad] = useState();
    
    const { name } = useParams();

   useEffect(() => {
       setLoad(true)
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
            .finally(() => {setLoad(false)})
    } else {
        const consult = query(productsCollection,orderBy("price"))

        getDocs(consult)
            .then(({ docs }) => {
                setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {setLoad(false)})
    }
    
   },[name])

    return (
        <div>
           { (load) ? 
               (<Loader />)
                : 
               (<ItemList items={list}/>)
          }
        </div>
    )
}
