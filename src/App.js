
import './App.css';
import { NavBar } from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './screens/colorlib-error-404-1/NotFound';





function App() {
  return <>

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route path='/category/:id'>
          <ItemListContainer />
        </Route>
        <Route path='/item/:id'>
          <ItemDetailContainer />
        </Route>
        <Route path='/item/'>
          <NotFound />
        </Route>
        <Route path='/category/'>
          <NotFound />
        </Route>
      </Switch>

    </BrowserRouter>
  </>
}

export default App;
