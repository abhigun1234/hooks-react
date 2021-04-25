import logo from './logo.svg';
import './App.css';
import Hooks from './Hooks';
import HooksObj from './HooksObj';
import UseStateArr from './UseStateArr';
import {BrowserRouter, Link, Route,Router,Switch} from 'react-router-dom'
import Home from './Home';
import Aboutus from './Aboutus';
function App() {
  return (
    <div className="App">
      
     
      <BrowserRouter>
        <Link to="">Hooks</Link>
     
        <Link to="/hooks">HooksObj</Link>
        <Link to="/home"> Home</Link>
        <Link to="/about"> About</Link>
        <Route exact path="" component={Home}></Route>
        <Route exact path="/hooks" component={HooksObj}></Route>
        <Route exact path="/about" component={Aboutus}></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
