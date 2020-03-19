import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Tooltip } from '@material-ui/core';

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
    handleClick(event){
        this.setState({})
    }
    render() {
        return (
            <div>
                const color:Change = color.pallete.map((key) =>{
                    return(
                        <div className="color-map">
                            <Tooltip >

                        </div>
                    )

                })
            </div>
        )
    }
}
export default withRouter(colorNote)