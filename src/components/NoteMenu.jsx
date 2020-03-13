import React, { Component } from "react";
//import { PureComponent } from "react";




class NotesMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
             obj:this.props.obj,
             getNote: this.props.getNote,
             pinnedStatus: false     
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            obj:props.obj
        });
    }
    
    render() {
        var pinflag = false;
    }
} 