import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import './User.css'
import { register } from "../Controller/UserController";


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
      err1:false,
      message: ""
    };
  }

  

  loginPage = () => {
    this.props.history.push('/login')
    
  }


  helpermailMethod=() => {
    if(this.state.err1)
    {
     return "Not a valid mail id"   
    }
   }
  
  /*/*/
   

  
   
    // getInputdata(data , event) {
    //   this.setState({
    //     [event.target.name]:data
    //   });
    // }

//     dataValidation() {
//       let fields = this.state;
//       let errors = {};
//       let formisValid = true ;
//       if (!fields["fname"]) {
//         formIsValid = false;
//         errors["fname"] = "Cannot be empty";
//     } else {
//         if (fields["fname"].length < 5) {
//             formIsValid = false;
//             errors["fname"] = "minimum 5 character";
//         }
//     }
//     if (!fields["lname"]){
//       formisValid = false;
//       errors
//     }
//     if(!fields["email"]){
//       formisValid = false;
//       errors["email"] ="Cannot be empty";
//     }
//     if(!fields["password"]){
//       formisValid = false;
//       errors["password"] ="Cannot be empty";
//     }else {
//      if (fields["password"] !== fields["c_password"]) {
//        formIsValid = false;
//        errors["c_password"] = "not match";
//    }
// }

// this.setState({ errors: errors });
// return formIsValid;

//     }


//  validate = () => {
//    let nameError= "";
//    let emailError= "";
//    let passwordError= "";

//    if(!this.state.email.includes('@')){
//      emailError = 'invalid email';
//    }
//    if (emailError){
//      this.setState({emailError});
//      return false;

//    }
//    return true;
//  };

     


/*/*/

  onchangeEmail = async event => {
    await this.setState({ Email: event.target.value });

    if (/^[a-zA-z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/.test(this.state.Email)) {
      this.setState({ err1: false});

    }
    else {
      this.setState({ err1: true });
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
    this.props.history.push('/login')
    if (this.state.Firstname === "") {
      console.log("firstname is empty")
    } else if (this.state.Lastname === "") {
      console.log("lastname is empty")
    } else if (this.state.Email === "") {
      console.log("email is empty")
    } else if (this.state.Password === "") {
      console.log("password is empty")
    } else if (this.state.confirmPassword === "") {
      console.log("requires same password")
    }

    else {

      let formaData = new FormData()
      formaData.append('fname', this.state.Firstname)
      formaData.append('lname', this.state.Lastname)
      formaData.append('email', this.state.Email)
      formaData.append('password', this.state.Password)
      formaData.append('c_password', this.state.Passwordagain)



      var registrationDetails = {
       
        fname: this.state.Firstname,
        lname: this.state.Lastname,
        email: this.state.Email,
        password: this.state.Password,
        c_password: this.state.Passwordagain

      }
      console.log(registrationDetails)
      register(formaData).then(response => {
        if (response.status === 200) {
          console.log("RESPONSE :", response);
        } else {
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
     


      

          
      <Card>
        <div className="mainReg" >
          <div maxWidth="5px" fixed >
            <form className="Register" >

              <h1 className="fundoohead">FUNDOONOTES</h1>

              <div style={{ width: "100%" }}>


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
              

                <div >
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
                <div >
                  <TextField
                    required={true}
                    error={this.state.err1}
                    id="Email"
                    label="Email"
                    variant="outlined"
                    value={this.state.Email}
                    onChange={this.onchangeEmail}
                    helperText={this.helpermailMethod}


                  />
                </div>
              
              <div >

                {/* <div className="col s6 Reg-Password"> */}
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
                {/* </div> */}
                

                
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
              <div className="row">

                <div className="col s6 Reg-button">
                  <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    className={classes.paper}
                    style={{ color: "blue"}}
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
                    style={{ color: "blue"}}
                    onClick={this.loginPage} >
                    signin
                  </Button>

                </div>
              </div>
            </form>

          </div>

        </div>
      </Card>

    );
  }
}

export default withRouter(Registration);