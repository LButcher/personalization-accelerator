import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
