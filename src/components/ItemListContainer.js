import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { db } from './firebase'
import { getDocs, query, collection , where , orderBy} from 'firebase/firestore'


export const ItemListContainer = () => {
   
    // const productosIniciales = [
    //     {id:1,title:"Cerveza rubia 500 ml",price:100,category:"1",pictureUrl:"/rubia.jpg"},
    //     {id:2,title:"Cerveza negra 500 ml",price:120,category:"1",pictureUrl:"/negra.jpg"},
    //     {id:3,title:"Cerveza roja 500 ml",price:120,category:"1",pictureUrl:"/roja.jpg"},
    //     {id:4,title:"Barril cerveza rubia 30 l",price:1000,category:"2",pictureUrl:"/barril 30l rubia.png"},
    //     {id:5,title:"Barril cerveza negra 30 l",price:1100,category:"2",pictureUrl:"/barril 30l negra.png"},
    //     {id:6,title:"Barril cerveza roja 30 l",price:1200,category:"2",pictureUrl:"/barril 30l roja.png"},
    // ]

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
