import React, { Component } from 'react'
import { Card, InputBase } from '@material-ui/core';


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

  openCard = () => {
       this.setState({cardOpen:true});
  };
  changeTilte = e => {
    this.setState({ title: e.currentTarget.value})
  };

  render() {
    return (
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


    )
    
    
    
    
    
    
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
                      




    
    









    
  }
}

export default CreateNote
