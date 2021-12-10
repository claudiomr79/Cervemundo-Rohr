import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export const ItemListContainer = (props) => {
   
    const productosIniciales = [
        {id:1,title:"cerveza rubia 500 ml",price:100,pictureUrl:"./rubia.jpg"},
        {id:2,title:"cerveza negra 500 ml",price:100,pictureUrl:"./negra.jpg"},
        {id:3,title:"cerveza roja 500 ml",price:100,pictureUrl:"./roja.jpg"},
    ]
    let [lista,setLista]= useState([]);

   useEffect(() => {
       const promesa = new Promise((res,rej)=>{
          setTimeout(() => {
              res(productosIniciales);
          },2000)
       })
       promesa
       .then(setLista)
       .catch(() => {console.log('Hubo una falla en la carga')});
   },[])

   const onAdd = (cantidad) => {
    console.log(cantidad)
   } 
    
    return (
        <div>
           <h4 style={{ textAlign:"center" }}>{props.greeting}! </h4>
           <ItemList items={lista}/> 
        </div>
    )
}
