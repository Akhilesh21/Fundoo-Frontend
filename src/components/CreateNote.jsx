import React, { Component } from 'react'
import {
  Tooltip,
  Card,
  InputBase,
  Button,
} from "@material-ui/core";
//import { Card, InputBase } from '@material-ui/core';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import UndoTwoToneIcon from "@material-ui/icons/UndoTwoTone";
import RedoTwoToneIcon from '@material-ui/icons/RedoTwoTone';
// import SvgPin from "../icons/svgPin";
// import SvgPinned from "../icons/svgUnpin";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: false,
      anchorEl: null,
      title: "",
      description: "",
      color: "",
      isPinned: false,
      open:false
    };
  }

  openCard = () => {
    this.setState({ cardOpen: true });
  };
  changeTilte = e => {
    this.setState({ title: e.currentTarget.value })
  };
  handleOpen = () => {
    this.setState({
      open:true
    })
  }
  handleOpenn = () => {
    this.setState({
      open:false
    })
  }
  render() {
    return (!(this.state.open) ? (<div onClick={this.handleOpen}> hai</div>) : (
      
      <div>
        <div className="card_open">
        <Card className="card1" style={{ backgroundColor: this.props.color }}>
          {/* {!this.state.isPinned ? (
            <div className="unpin" onClick={this.handleOpenPin}>
              <SvgPin />
            </div>
          ) : (
            <div className="pin" alt="pin" onClick={this.handleClosePin}>
            <SvgPinned />
          </div>
        )} */}
        <div>
          <InputBase
            multiline
            placeholder="Title"
            onChange={this.changeTilte}
            value={this.state.title}
          />
        </div>
        <div>
          <InputBase
            multiline
            placeholder="take a noteeeeeeeeee.."
            onChange={this.changeDescription}
            value={this.state.description}
          />
        </div>
        <div></div>
        <div className="icon2">
          <div>
            <Tooltip title="remind me">
              <AddAlertOutlinedIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Collborator">
              <PersonAddOutlinedIcon />
            </Tooltip>
          </div>

          <div>
            <Tooltip title="Add image">
              <ImageOutlinedIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Archive">
              <ArchiveOutlinedIcon />
            </Tooltip>
          </div>
          <div className="lc"></div>
        </div>
        <div>
          <Tooltip title="Undo">
            <UndoTwoToneIcon />
          </Tooltip>
        </div>
        <div>
        <Tooltip title="Redo">
          <RedoTwoToneIcon />
          </Tooltip>
          </div>
          <div>
            <Button color="primary" onClick={this.handleOpenn} >
              Close
              </Button>
            </div>
      
       </Card>

       </div>
      </div> )
    );
  }
}






//   <div className="a_card">
//     <Card className= "b_card">

//             <div className="c_card">
//               <div>
//                 </div>
//             </div>
//     </Card>
//   </div>
// )(
//   <div>
//     <div className="a">
//       <Card className="b" >

//       </Card>
//       </div>
//     </div>
// )(



















export default CreateNote
