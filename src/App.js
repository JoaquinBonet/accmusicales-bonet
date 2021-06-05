
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemCount } from './components/ItemCount';



function App() {
  return <>
    <NavBar  />
    <ItemListContainer><ItemCount ></ItemCount></ItemListContainer>
  </>
}

export default App;
