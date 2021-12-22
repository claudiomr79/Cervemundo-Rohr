import { NavBar } from "./components/header/NavBar";
import { ItemListContainer } from "./components/ItemListContainer"
import 'bootswatch/dist/litera/bootstrap.min.css'; //bootswatch
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Cart  from "./components/Cart"
import Search from "./components/Search"

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }  />
        <Route path="/category/:id" element={ <ItemListContainer /> }/>
        <Route path="/item/:id" element={ <ItemDetailContainer />  }  />
        <Route path="/cart" element={ <Cart /> }  />
        <Route path="/search" element={ <Search /> }  />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);


export default App;