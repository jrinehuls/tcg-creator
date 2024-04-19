import Axios from "axios";

const url = "http://localhost:8080/api/user";

const config = {
    headers: {
      'Content-Type': 'application/json',
    },
};

export async function authenticate(user) {
    return await Axios.post(url + '/authenticate', user, config);
}

export async function register(user) {
    return await Axios.post(url + '/register', user, config);
}
