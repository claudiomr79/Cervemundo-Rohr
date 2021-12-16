import { NavBar } from "./components/header/NavBar";
import {ItemListContainer} from "./components/ItemListContainer"
import 'bootswatch/dist/litera/bootstrap.min.css'; //bootswatch
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () =>(
<>
    <NavBar />
    {/* <ItemListContainer greeting= {"Bienvenido a Cervemundo"}/> */}
    <ItemDetailContainer/>
</> 
)


export default App;