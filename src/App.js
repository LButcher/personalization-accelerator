
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Goals from './components/Goals.js'

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/Goals">
            <Goals></Goals>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
