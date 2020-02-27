import React , { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Controller from '../Controller/UserController';
import Textfield from '@material-ui/core/TextField';
import "./User.css";
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1.5,
    style: {width: '49rem' , height: '25rem' , margin: '85px'}

};

const useStyles = makeStyles(theme => ({
    root: {

    },
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

class Forgotpassword extends Component{
    constructor(props){
        super(props);

        this.state = {
            Email : "",
            error: false,
            message: ""
        };
    }
       
    onchangeEmail = async event => {
        let emailData = event.target.value
        await this.setState({ Email: emailData});
        console.log("email validation state", this.state.Email);
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.Email)){
            console.log("******valid**********")
        }
        else{
            console.log("not email");
        }
    };

onsubmit = () => {
    var forgotDetails = {
        email : this.state.Email,
    }
    console.log(forgotDetails)
}


render(){
  const classes = { useStyles };
  return (
      <div style={{ paddingRight: '50%', marginLeft: '180px' }}>
            <Box display="flex" justifyContent="center" borderColor="text.primary" {...defaultProps}>
                <div style={{ marginTop: '14px', marginLeft: '14px' }}>
                         {/* <img width='60px' height='60px' src={"https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"} alt="Logo" /> */}
                        <div style={{ color: '#616161', fontSize: '35px', fontWeight: 'lighter', marginTop: '25px' }}>
                            FUNDOO
                            </div> 
             <div style={{ marginTop: '130px' }}><div style={{ color: '#616161' ,fontsize: '30px', fontFamily:'serif',padding: '73px', marginLeft:'-175px', marginLeft: '-175px', paddingBottom: '45px' }}>Forgot Password</div>
                    </div>
                    <div style={{ width: '100%', marginTop: '-105px' }}>
                        <div style={{ paddingBottom: '23px',paddingRight: '176px' }}>
                            <Textfield
                            required={true}
                            error={this.state.error}
                            id="Email"
                            label="Email"
                            variant="outlined"
                            value={this.state.Email}
                            onChange={this.onchangeEmail}
                            

            </Box>
          </div>
  )   
}





                    
                                />
                            </div>
                        </div>





                        <div style={{ paddingRight: '114px' }}>                        <Button
                            variant="outlined"
                            size="medium"
                            color="primary"
                            className={classes.paper}
                            style={{ color: "blue" }}
                            onClick={this.onSubmit}
                        >
                            Submit
                </Button>
                        </div>

                    </div>




                </Box>
            </div>

        );
    }
}

export default Forgotpassword