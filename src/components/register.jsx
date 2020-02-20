import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import './User.css'
import controller from "../Controller/UserController";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));


class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",
      Passwordagain: "",
      error: false,
      message: ""
    };
  }
  

  loginPage = () => {
    this.props.history.push('/login')
  }



  
  onchangeEmail = async event => {
    let emailData = event.target.value
    await this.setState({ Email: emailData });
    console.log("email validation state", this.state.Email);

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.Email)) {
      console.log("email");

    }
    else {																																																																																																																								
      console.log("not email");


    }
    
  };

  onchangeFirstname = event => {
    this.setState({ Firstname: event.target.value });

  };

  onchangeLastname = event => {
    this.setState({ Lastname: event.target.value });

  };

  onchangePassword = event => {
    this.setState({ Password: event.target.value });
  };

  onchangePasswordagain = event => {
    this.setState({ Passwordagain: event.target.value });
  };

     














  onSubmit = () => {
    if(this.state.Firstname===""){
      console.log("firstname is empty")
    }else if(this.state.Lastname===""){
      console.log("lastname is empty")
       }else if(this.state.Email===""){
         console.log("email is empty")
       }else if(this.state.Password===""){
         console.log("password is empty")
       }

else{
    var registrationDetails = {

//      username: this.state.Username,
      fname: this.state.Firstname,
      lname: this.state.Lastname,
      email: this.state.Email,
      password: this.state.Password,

    }
    console.log(registrationDetails)
    controller.register(registrationDetails).then(response => {
      if(response.status === 201){
      console.log("RESPONSE :",response);
      }else{
      console.log("fgtgybhbyunyuhnjun ujuju");
    }
  }
    )
    .catch(

    )

  }
   
  }



  render() {
    const classes = { useStyles };

    return (
      // <Card className="card" style={{ width: "80%" , color :"red" , height:"200%"}} >
  
      
<Card>
      <div className="mainReg" >
        <Container maxWidth="5px" fixed >
          <form className="Register" style={{ width: "60%" }} >
             
            <h2 className="fundoohead">fundoonotes</h2>

            <div className="row" style={{ width: "300%"}}>
             

              <div className="col s6 Reg-Firstname">
                <TextField
                  required={true}
                  error={this.state.error}
                  id="Firstname"
                  label="Firstname"
                  variant="outlined"
                  value={this.state.Firstname}
                  onChange={this.onchangeFirstname}
                  className={classes.paper}
                />
              </div>
            </div>
            <div className="row" style={{ width: "300%" }}>

              <div className="col s6 Reg-Lastname">
                <TextField
                  required={true}
                  error={this.state.error}
                  id="Lastname"
                  label="Lastname"
                  variant="outlined"
                  value={this.state.Lastname}
                  onChange={this.onchangeLastname}
                  className={classes.paper}
                />
              </div>
              <div className="col s6 Reg-Email">
                <TextField
                  required={true}
                  error={this.state.error}
                  id="Email"
                  label="Email"
                  variant="outlined"
                  value={this.state.Email}
                  onChange={this.onchangeEmail}
                />
              </div>
            </div>
            <div className="row" style={{ width: "70%",height:"-20px"}}>

              <div className="col s6 Reg-Password">
                <TextField
                  required={true}
                  error={this.state.error}
                  id="Password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={this.state.Password}
                  onChange={this.onchangePassword}
                  className={classes.paper}
                />
              </div>
              <div className="col s6 Reg-Passwordagain" >
                <TextField
                  required={true}
                  error={this.state.error}
                  id="Passwordagain"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  value={this.state.Passwordagain}
                  onChange={this.onchangePasswordagain}
                  className={classes.paper}
                />
              </div>
            </div>
            <div className="row" style={{ width: "300%" }}>

              <div className="col s6 Reg-button">
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className={classes.paper}
                  style={{ color: "blue" , width: "20%" }}
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </div>
                <div className="col s6 Reg-button">
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className={classes.paper}
                  style={{ color: "blue" , width: "20%"}}
                  onClick={this.loginPage} >
                  signin
                  </Button>
              </div>  
            </div>  
          </form>
          
        </Container>
        
      </div>
       </Card>
    
    );
  }
}

export default withRouter(Registration);