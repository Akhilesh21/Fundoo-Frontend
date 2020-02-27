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
    
}