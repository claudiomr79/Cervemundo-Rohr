import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'

export const ItemListContainer = () => {
   
    const productosIniciales = [
        {id:1,title:"cerveza rubia 500 ml",price:100,category:"1",pictureUrl:"/rubia.jpg"},
        {id:2,title:"cerveza negra 500 ml",price:120,category:"1",pictureUrl:"/negra.jpg"},
        {id:3,title:"cerveza roja 500 ml",price:120,category:"1",pictureUrl:"/roja.jpg"},
        {id:4,title:"Barril cerveza rubia 30 l",price:1000,category:"2",pictureUrl:"/barril 30l rubia.png"},
        {id:5,title:"Barril cerveza negra 30 l",price:1100,category:"2",pictureUrl:"/barril 30l negra.png"},
        {id:6,title:"Barril cerveza roja 30 l",price:1200,category:"2",pictureUrl:"/barril 30l roja.png"},
    ]

    let [lista,setLista]= useState([]);
    const {id} = useParams();
    console.log(id);

   useEffect(() => {
       const promesa = new Promise((res,rej)=>{
          setTimeout(() => {
              res(productosIniciales);
          },2000)
       })
       if(id){             
        promesa
       .then(i  => {
           setLista(i.filter(cat => cat.category === (id) ))
    })
       .catch(() => {console.log('Hubo una falla en la carga')});
       }else{
        promesa
       .then(setLista)
       .catch(() => {console.log('Hubo una falla en la carga')});
       }
   },[id])

    
    return (
        <div>
           <ItemList items={lista}/> 
        </div>
    )
}
