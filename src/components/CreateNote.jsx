import React, { useState ,Fragment,Component, PureComponent } from "react";
import Card from "@material-ui/core/Card";


const drawerWidth = 244;

const saveclose = "Save & Close";
let array = [];
class CreateNote extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            
            open : false,
            menu: false,
            openNote: false,

            
        }
    }
    handleLabel = async(data) => {
          array.push(data)
          await this.setState({
              allLabels:array,
              labelpresent:true,
          })
          console.log(this.state.allLabels)

    }
    handleLabelRemove = async (data) => {

        array.pop(data)
        await this.setState({
          allLabels: array
        })
        console.log(this.state.allLabels)
        if (this.state.allLabels.length === 0) {
          this.setState({ labelpresent: false })
        }
      }
    MenuClose = () => {
        this.setState({ menu: false });
      };
}
