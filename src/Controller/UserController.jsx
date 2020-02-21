import axios from 'axios';



//require('dotenv').config()

let headers = {
  "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"}


// var controller = {
  //  export async function 
    export async function register(data){
            // let details={
            //     fname:data.fname,
            //     lname:data.lname,
            //     email:data.email,
            //     password:data.password,
            //     c_password:data.c_password
            // }
        // console.log("controller register method ", details)
        let response= axios.post('http://127.0.0.1:8000/api/register', data);
        console.log("to check for response",response.id)
        return response
    
    // login(loginDetails) {
    //     console.log("controller login method ", loginDetails)
    //     return axios.post('/http://127.0.0.1:8000/api/register', loginDetails)
    // }
    // ,

}

// export default controller