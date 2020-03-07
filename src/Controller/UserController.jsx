import axios from 'axios';
import useConstants from '../Constants/uesConstants';

let headers = {
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*"
}


export async function register(data) {

  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.Register, data);
  console.log("to check for response", response.id)
  return response
}




export async function login(data) {
  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.Login, data);
  console.log("to check for response", response.id)
  return response

}

export async function forgotpassword(data) {
  let response = axios.post(process.env.REACT_APP_BASE_URL + useConstants.ForgotPassword, data);
  console.log("to check for response", response.id)
  return response
}

