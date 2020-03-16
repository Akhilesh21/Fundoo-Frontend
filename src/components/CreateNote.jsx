import React, { Component } from 'react'


class CreateNote extends Component {
  constructor(props){
    super(props);
    this.state= {
      cardOpen : false,
      anchorEl : null,
      title: "",
      description: "",
      color: "",
      isPinned:false
    };
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default CreateNote
