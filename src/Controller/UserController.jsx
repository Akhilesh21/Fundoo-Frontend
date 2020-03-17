import axios from 'axios';
import useConstants from '../Constants/uesConstants';







let headers = {
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Origin set to ":"*",
  method: 'post',

  }


export async function register(data) {

  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.Register, data);
  console.log("to check for response", response)
  return response
}




export async function login(data) {
  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.Login, data);
  console.log("to check for response", response.id)
  // let token=response.id
  // localStorage.setItem('usertoken',token)
  // console.log("to check id",localStorage.setItem('usertoken',token))
  return response

}

export async function forgotpassword(data) {
  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.ForgotPassword, data);
  console.log("to check for response", response.id)
  return response
}

export async function create(data) {
  
  // let gettingtoken = localStorage.getItem('usertoken')
  // console.log("token is comuing",gettingtoken)
  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.createNote, data).then((res=>{
    console.log("res",res);
    
  })).catch((err)=>{
    console.log("err",err);
    
  })
  console.log("to check for response", response)
  return response
  
}


