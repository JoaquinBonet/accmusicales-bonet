
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from  './components/ItemDetailContainer/ItemDetailContainer'




function App() {
  return <>
    <NavBar  />
    <ItemDetailContainer ></ItemDetailContainer>
  </>
}

export default App;
