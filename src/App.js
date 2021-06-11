
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';




function App() {
  return <>
    <NavBar  />
    <ItemListContainer ></ItemListContainer>
  </>
}

export default App;
