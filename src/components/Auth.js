import React, { Component } from 'react'

export default class Auth extends Component {
    login()
    {
        console.warn("state",this.state)
        
    //     alert("login called")
    // 
}
    render() {
        return (
            <div>
                <input type="text"
                onChange={(e)=>{this.setState({email:e.target.value})}}
                /><br /><br />
                <input type="text"
                onChange={(e)=>{this.setState({password:e.target.value})}}
                /><br /><br />
                <button onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}
    