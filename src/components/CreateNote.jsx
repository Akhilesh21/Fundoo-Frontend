import React, { Component } from 'react'
import { Card } from '@material-ui/core';


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

  render() {
    return (
      <div className="a_card">
        <Card className= "b_card">
              
                <div className="c_card">
                  <div>
                    </div>
                </div>
        </Card>
      </div>
    )(
      <div>
        <div className="a">
          <Card className="b" >

          </Card>
          </div>
        </div>
    )(
                      




    )
    













    
  }
}

export default CreateNote
