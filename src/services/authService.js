import Axios from "axios";

export class AuthService {
    url = "http://localhost:8080/api/user";

    config = {
        headers: {
            'content-type': 'application/json'
        },
    };

    constructor(){};

    async login(user) {
        return await Axios.get(url + '/authenticate', user, config);
    }

    async register(user) {
        return await Axios.post(url + '/register', user, config);
    }

}
