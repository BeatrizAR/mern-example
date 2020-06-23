import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Inicio from './components/inicio';
import Registro from './components/registro';
import Login from './components/login'

function App() {
  return (
    <Router>
      <Route exact path="/inicio" component={Inicio} />
      <Route exact path="/registro" component={Registro}/>
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
