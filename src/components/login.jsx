import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { login } from '../Controller/UserController';
import { Container, Card, Snackbar } from "@material-ui/core";


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


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Password: "",

            error: false,
            message: ""
        };
    }



    signupPage = () => {

        this.props.history.push('/register')
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



    onchangePassword = event => {
        this.setState({ Password: event.target.value });
    };

        


    // onSubmit = () => {
    //     this.props.history.push('')
    //     if (this.state.Email === "") {
    //       console.log("email is empty")
    //     } else if (this.state.Password === "") {
    //       console.log("password is empty")
    //     }
    
    //     else {
    
    //       let formaData = new FormData()
    //       formaData.append('email', this.state.Email)
    //       formaData.append('password', this.state.Password)
          
    //     }
    // }

    // var loginDetails = {
    //       email: this.state.Email,
    //       password: this.state.Password        
    // }
    // console.log(loginDetails)
    // login(formaData).then(response => {
    //     if(response.status === 200 )
    // })
  






























    onSubmit = () => {
        var loginDetails = {

            email: this.state.Email,
            password: this.state.Password,

        }
        console.log(loginDetails)
       
    }



    render() {
        const classes = { useStyles };

        return (
            <div className="mainLogin" >
                <Container maxWidth="sm">
                    <form className="Login" style={{ width: "70%" }} >
                        <h1 className="fundoohead">Fundoonotes</h1>


                        <div className="row">

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


                        <div className="row" >
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
                        </div>
                        

                        <div className="row" >

                            <div className="col s6 Reg-button">
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    color="primary"
                                    className={classes.paper}
                                    style={{ color: "blue" }}
                                    onClick={this.onSubmit}
                                >
                                    Login
                </Button>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col s6 Reg-button">


                                
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    color="primary"
                                    className={classes.paper}
                                    style={{ color: "blue" }}
                                    onClick={this.signupPage}
                                >
                                    Signup
                                </Button>
                            </div>
                        </div>


                    </form>
                </Container>
            </div>
        );
    }
}

export default Login