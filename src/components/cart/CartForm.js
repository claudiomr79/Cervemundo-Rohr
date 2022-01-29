import React, {useState , useEffect } from 'react'
import { useContexto } from "../context/myContext"
import { addDoc, collection , serverTimestamp, doc, updateDoc} from "firebase/firestore"
import { db } from "../firebase/firebase"
import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const CartForm = () => {
    const { cart, clear , totalPrice } = useContexto()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [idSale, setIdSale] = useState('');

    const saveName = e => {
        const input = e.target;
        const valor = input.value;
        setName(valor);
      };
      const savePhone = e => {
        const input = e.target;
        const valor = input.value;
        setPhone(valor);
      };
      const saveEmail = e => {
        const input = e.target;
        const valor = input.value;
        setEmail(valor);
      };

      const handleBuy = () => {
        
          const buyer = { name: name, mail: email, phone: phone };
          const total = totalPrice;
          const date = serverTimestamp();
          const carts= cart;
          const sales = collection(db, 'orders')
          addDoc(sales, { buyer, carts, date, total })
            .then((result)=>{
                setIdSale(result.id)
            });
        
      };

      useEffect(() => {
        
        const productsCollection = collection(db, "products")
        cart.forEach((item) =>{
            const refDoc = doc(productsCollection, item.id)
            updateDoc(refDoc, {
                "stock": item.stock - item.quantity
            });
        })
       
       }, []);

    return (
        <>
            {!idSale ?  
            (
            <div className="mt-1 p-5 d-flex flex-column justify-content-center align-items-center">
                <span>
                    <h2>Ingrese sus datos</h2>
                    <input type="text" placeholder="Nombre" onChange={saveName}/><br/><br/>
                    <input type="number" placeholder="Phone" onChange={savePhone}/><br/><br/>
                    <input type="email" placeholder="Email" onChange={saveEmail}/><br/><br/>
                    <Button  variant="primary" onClick={()=>{handleBuy()}}>Terminar compra</Button>
                </span>
            </div>
            ) :
            (
             <div className="m-1 p-5 d-flex flex-column align-items-start" >
                <h5><b>Gracias por su Compra, Sr {name}</b></h5>
                <br/>
                <div className="m-0 p-1">
                    <b>Sus Datos:</b><br/>
                    <b>Telefono:</b> {phone}<br/>
                    <b>EMail:</b> {email}<br/>
                   <b>Total: ${totalPrice}</b><br/>
                </div>
                <div className=" border border-2 border-primary">
                    <b>Id de la compra: {idSale}</b>
                </div>
                <NavLink  className="p-2" to="/" onClick={clear}>
                     <Button variant="primary">Volver</Button>
                </NavLink>
            </div>
            )}
        </>
    )
}

export default CartForm