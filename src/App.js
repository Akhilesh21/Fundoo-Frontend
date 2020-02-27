import React from 'react';
import './App.css';
import  {BrowserRouter  as Router, Route} from "react-router-dom"
import Registration from './components/register'
import Login from './components/login'
import Forgotpassword from './components/forgotpassword'

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
        <Route path="/login"  exact component={Login}/>
        <Route path="/register" component={Registration}/>
        <Route path="/forgot" component={Forgotpassword}/>
        </Router>
    )
  }
}
export default App;






// import React, { Component } from 'react';
// import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import  Navbar from './component/Navbar'
// import  Landing from './component/Landing'
// import  Register from './component/Register'
// import  Profile from './component/Profile'
// import  Login from './component/Login'

// class App extends React.Component {
//   render() {
//     return (
//     <Router>
//     <div className="App">
//       <Navbar/>
//       <Router exact path="/" component={Landing}/>
//       <div className="container">
//       <Route exact path="/register" component={Register} />
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/profile" component={Profile} />
//       </div>
//       </div>
//     </Router>
//     )
// }
// }
