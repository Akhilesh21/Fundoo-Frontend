import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

// import { dashboard } from "../Controller/UserController";
// import { dashboard } from "../Controller/UserController";
class Dashboard extends Component {
    constructor(props) {
        super(props);
   this.state = {

   };
    }
    render() {
        return(
            <div className="dashboard">
                <h1>Welcome to react fundoo notes---------Laravel+react</h1>
                <h1>Welcome to BridgeLabz</h1>
                
    </div>
        )
    }
}


export default withRouter(Dashboard)
