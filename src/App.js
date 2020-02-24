import React from 'react';
import './App.css';
import  {BrowserRouter  as Router, Route} from "react-router-dom"
import Registration from './components/register'
import Login from './components/login'

import "./App.css";


class App  extends React.Component{
  render()
  {
    return (
      <Router>
         {/* <Route path="/test" component={Register}/> 
         <Route path="/register"  component={Register}/>  */}
        {/* <Route path="/" exact  component={Registration}/> */}
        {/* <p>
          hello world!
          </p>
         */}
        {/* <Route path="/" exact component={Registration}/> */}
        <Route path="/login"  exact component={Login}/>
        <Route path="/register" component={Registration}/>
        </Router>
    )
  }
}
export default App;
