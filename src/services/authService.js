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
        return await Axios.post(this.url + '/authenticate', user, this.config);
    }

    async register(user) {
        return await Axios.post(this.url + '/register', user, this.config);
    }

}
