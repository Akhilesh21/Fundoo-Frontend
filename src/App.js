import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter  as Router,Route} from "react-router-dom"
import Home from './components/Home'
import Listing from './components/Listing'
import About from './components/About'
import Auth from './components/Auth'
import Register from './components/test'

class App  extends React.Component{
  render()
  {
    return (
      <Router>
        <Route path="/" exact={true} Component={Register}/>
        <Route path="/Home" Component={Home}/>
        <Route path="/register"  Component={Register}/>

          </Router>
    )
  }
}

export default App;
