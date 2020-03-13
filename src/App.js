import React from 'react';
import './App.css';
import  {BrowserRouter  as Router, Route} from "react-router-dom"
import { Switch } from 'react-router-dom';

import Registration from './components/register'
import Login from './components/login'
import Forgotpassword from './components/forgotpassword'
import Dashboard from './components/dashboard'
import ResponsePage from './components/newPage'
import SignUp from './components/test'
import PrimarySearchAppBar from './components/AppBar'
import SideNavBar from './components/sideBar'
import SignIn from './components/test'

// import "./App.css";


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
       <Switch>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/register" component={Registration}/>
        <Route path="/forgot" component={Forgotpassword}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/newpage" component={ResponsePage}/>
        <Route path="/AppBar" component={PrimarySearchAppBar}/>
        <Route path="/sideBar" component={SideNavBar}/>
        <Route path="/test" component={SignIn}/> 

        

        </Switch>
        </Router>
    )
  }
}
export default App;
