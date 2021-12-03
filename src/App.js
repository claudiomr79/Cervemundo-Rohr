import { NavBar } from "./components/header/NavBar";
import 'materialize-css/dist/css/materialize.min.css';
import {ItemListContainer} from "./components/ItemListContainer"

const App = () =>(
<>
    <NavBar/>
    <ItemListContainer greeting= {"Bienvenido a Cervemundo"}/>
</> 
)


export default App;