# Cervemundo

## Proyecto final del curso ReactJs en CoderHouse camada 19770

Deploy: [cervemundo.netlify.app](cervemundo.netlify.app)

 Soy Claudio Rohr, realicé éste proyecto para el curso de React de CoderHouse.

Se usó firestore como base de datos, que es un servicio de Firebase, para persistir los productos que se muestran y sus datos, además de las ordenes de compra que se generan.

## Caracteristicas

- Navegabilidad entre catalogo completo, filtrado por categorias, ordenadas por precio y detalle individual del producto.
- Botón de agregar al carrito para varios items con control según stock.
- Se descuenta del stock de cada producto en firestore solo los productos que fueron comprados, con el botón terminar compra.
- Cada producto tiene una etiqueta que al ser seleccionada filtra por categoria y muestra los productos que pertenecen a ella.



### Una muestra de funcionamiento de la app
![Cervemundo](https://github.com/claudiomr79/Cervemundo-Rohr/blob/main/public/cervemundo1.gif)
### Orden guardada en firestore
![Firestore](https://github.com/claudiomr79/Cervemundo-Rohr/blob/main/public/firestore.gif)

### Instalación y puesta en marcha

Primero hay que clonar el repositorio:
> git clone https://github.com/claudiomr79/Cervemundo-Rohr.git

Luego moverse a la carpeta Cervemundo-Rohr
>cd Cervemundo-Rohr

Después hacer:
>npm install

Luego de ésto:
>npm run start 

y la app estará corriendo.

## Dependencias instaladas :

  *  bootswatch (tema para bootstrap)
  *  firebase
  *  react-bootstrap
  *  react-loader-spinner
  *  react-router-dom
  *  react-toastify

## Adicionales a lo solicitado

- se hace manejo de stock en tiempo real.

## Mejoras a agregar en proximas versiones

En el futuro, se harán las siguientes mejoras:

- Implementación de login de usuarios.
- Implementar pasarela de pagos.
- Hacer validaciones en el formulario de carga de datos del comprador.
- Implementar el uso de localstorage para que no se pierda el carrito cuando se recarga la página.


