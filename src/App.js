import { NavBar } from "./components/header/NavBar";
import {ItemListContainer} from "./components/ItemListContainer"
import 'bootswatch/dist/sketchy/bootstrap.min.css'; //bootswatch

const App = () =>(
<>
    <NavBar/>
    <ItemListContainer greeting= {"Bienvenido a Cervemundo"}/>
</> 
)


export default App;