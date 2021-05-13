import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import NavBar from "./components/NavBar.js";


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
            <div>hello</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
