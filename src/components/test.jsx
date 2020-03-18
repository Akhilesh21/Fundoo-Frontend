import React, { Component } from "react";
import {
  Tooltip,
  Card,
  InputBase,
  Button,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
//import { Snackbar } from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import UndoTwoToneIcon from "@material-ui/icons/UndoTwoTone";
import RedoTwoToneIcon from "@material-ui/icons/RedoTwoTone";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
//import SvgPin from "../icons/svgPin";
//import SvgPinned from "../icons/svgUnpin";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOpen: false,
      anchorEl: null,
      color: "",
      title: "",
      description: "",
      isPinned:false
    };
  }
  openCard = () => {
    this.setState({ cardOpen: true });
  };
  changeTitle = e => {
    this.setState({ title: e.currentTarget.value });
  };
  changeDescription = e => {
    this.setState({ description: e.currentTarget.value });
  };
  handleOpen = () => {
    this.setState({
      cardOpen: true
    });
  };
  handleOpenPin = noteId => {
    this.setState({ isPinned: true });
    let data = {
      noteId: noteId,
      isPinned: this.state.isPinned
    };
    
  };
  handleClosePin = () => {
    this.setState({ isPinned: false });
  };

  newNote = () => {
    try {
      if (this.state.title === "" && this.state.description === "") {
        this.setState({ cardOpen: false });
      } else {
        const noteData = {
          title: this.state.title,
          description: this.state.description
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return !this.state.cardOpen ? (
      <div className="new_card" onClick={this.handleOpen}>
        <Card className="create" style={{ boxShadow: "0px 0px 5px 1px" }}>
          <div className="create1">
            <div>
              <InputBase placeholder="Take a note..." />
            </div>
            <div className="create_icon">
              <div>
                <CheckBoxOutlinedIcon />
              </div>
              <div>
                <ImageOutlinedIcon />
              </div>
              <div>
                <CreateOutlinedIcon />
              </div>
            </div>
          </div>
        </Card>
      </div>
    ) : (
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
                placeholder="Ttitle"
                onChange={this.changeTitle}
                value={this.state.title}
              />
            </div>
            <div>
              <InputBase
                multiline
                placeholder="Take a note..."
                onChange={this.changeDescription}
                value={this.state.description}
              />
            </div>
            <div></div>
            <div className="icons2">
              <div>
              <AddAlertOutlinedIcon/>
              </div>	
              <div>
                <Tooltip title="Collbrate">
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

              <div className="full_label">
                <Tooltip title="More">
                  <MoreVertIcon />
                </Tooltip>
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
                <Button color="primary" onClick={this.newNote} >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
export default Notes;