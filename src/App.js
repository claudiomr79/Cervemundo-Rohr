import { NavBar } from "./components/header/NavBar";
import { ItemListContainer } from "./components/ItemListContainer"
import 'bootswatch/dist/journal/bootstrap.min.css'; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Cart  from "./components/cart/Cart"
import CustomProvider  from './components/context/myContext'
import CartForm from "./components/cart/CartForm";
import { PageNotFound } from "./components/pageNotFound/PageNotFound";

const App = () => (
  <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={ <ItemListContainer /> }  />
            <Route path="/category/:name" element={ <ItemListContainer /> }/>
            <Route path="/item/:id" element={ <ItemDetailContainer />  }  />
            <Route path="/cart" element={ <Cart /> }  />
            <Route path="/form" element={ <CartForm /> } />
            <Route path="*" element={ <PageNotFound />}  />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  </CustomProvider>
);


export default App;