import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class colorNote extends Component {
    constructor(props){
        super(props);
        this.state ={
            anchorEl:false
        }
    }
    handleClickAway = () =>{
        this.setState({
            anchorEl:false
        })
    }
    handleChangeColor = (e) =>{
        console.log("hjsdadagdjghakjcghakjcahkj"+e)
        this.props.paletteProps(e.target.value,this.props.id)
    }
    handleClose = () =>{
        this.setState({
            anchorEl:false
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default withRouter(colorNote)