import axios from 'axios';



//require('dotenv').config()

let headers = {
    'Content-Type': 'application/json',
    crossorigin:true
}


var controller = {

    register(registrationDetails) {
        console.log("controller register method ", registrationDetails)
        return axios.post('http://127.0.0.1:8000/api/register', registrationDetails,{headers:headers})
    }
    ,
    login(loginDetails) {
        console.log("controller login method ", loginDetails)
        return axios.post('http://127.0.0.1:8000/api/login', loginDetails)
    }
    ,

}

export default controller