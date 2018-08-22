import axios from "axios"

let API_URL = "http://localhost:4000/api"

let api = {
    Login : (form) => {
        return axios.post(`${API_URL}/users/authenticate/login`, form, { headers: {'Accept': 'application/json'} })
    }
}


export default api 