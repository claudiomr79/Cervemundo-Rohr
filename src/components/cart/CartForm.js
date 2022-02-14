import React, {useState , useEffect } from 'react'
import { useContexto } from "../context/myContext"
import { addDoc, collection , serverTimestamp, doc, updateDoc} from "firebase/firestore"
import { db } from "../firebase/firebase"
import { Button , Form , Row , Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const CartForm = () => {
    const { cart, clear , totalPrice } = useContexto()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [idSale, setIdSale] = useState('');
    const [validated, setValidated] = useState(false);
    const [finished, setFinished] = useState(true)
    
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setFinished(false);
    }else{
        handleBuy();
        setFinished(true);
    }
    setValidated(true);
    };

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

      const handleBuy = async () => {
          const buyer = { name: name, mail: email, phone: phone };
          const total = totalPrice;
          const date = serverTimestamp();
          const carts= cart;
          const sales = collection(db, 'orders')
          await addDoc(sales, { buyer, carts, date, total })
            .then((result)=>{
                setIdSale(result.id)
            });
         const productsCollection = collection(db, "products")
         cart.forEach((item) =>{
            const refDoc = doc(productsCollection, item.id)
            updateDoc(refDoc, {
                "stock": item.stock - item.quantity
            });
        })
      };

    return (
        <>
            {!(finished && name && phone && email && validated) ?
            (
            <div className="mt-1 p-5">
                <span>
                    <div className="p-2">
                       <h2>Ingrese sus datos</h2>
                    </div>
                         <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                    type="text"
                                    placeholder="Nombre"
                                    defaultValue=""
                                    onChange={saveName}
                                    required
                                    />
                                    <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" controlId="phone">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="number" placeholder="telefono" onChange={savePhone} required/>
                                    <Form.Control.Feedback type="invalid">
                                    Por favor ingrese un telefono válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="email" onChange={saveEmail} required />
                                    <Form.Control.Feedback type="invalid">
                                    Por favor ingrese un email válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button type="submit">Terminar compra</Button>
                        </Form>
                </span>
            </div>
            ) :
            (
             <div className="m-1 p-5 d-flex align-items-center justify-content-center" >
                <div className="d-flex flex-column align-items-start justify-content-center">
                    <span className="p-2">
                        <h5><b>Gracias por su Compra, Sr {name}</b></h5>
                    </span>
                        <span className="m-0 p-1"><b>Telefono:</b> {phone}</span>
                        <span className="m-0 p-1"><b>EMail:</b> {email}</span>
                        <span className="m-0 p-1"><b>Total: ${totalPrice}</b></span>
                    <span className="h3 border border-2 border-primary">
                        <b>Id de la compra: {idSale}</b>
                    </span>
                    <NavLink  className="p-2" to="/" onClick={clear}>
                        <Button variant="primary">Volver</Button>
                    </NavLink>
                </div>
            </div>
            )}
        </>
    )
}

export default CartForm

