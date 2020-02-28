import axios from 'axios';

let headers = {
  "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"}


    export async function register(data){
            
        let response= axios.post('http://127.0.0.1:8000/api/register', data);
        console.log("to check for response",response.id)
        return response
}



  
    export async function login(data){
  let response = axios.post('http://127.0.0.1:8000/api/login', data);
  console.log("to check for response",response.id)
  return response

}
