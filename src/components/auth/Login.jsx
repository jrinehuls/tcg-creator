
import { useState } from "react";
import { AuthService } from "../../services/authService.js";
import FormText from "../form_input/FormText";


function Login() {
    const authService = new AuthService();

    const defaultUser = {
        username: "",
        password: ""
    }

    const [user, setUser] = useState(defaultUser);
    const [errors, setErrors] = useState(null);

    async function login() {
        try {
            const response = await authService.login(user);
            console.log(response.data);
            console.log(response.headers);
            console.log(response.headers['authorization']);
        } catch (e) {
            console.error(e.response.data);
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setUser(u => {
            return {
                ...u,
                [name]: value
            };
        })
    }

    function handleClick() {
        login();
    }

    return(
        <div style={{marginTop: '100px'}}>
            <h1>Loggeth Thou In</h1>
            <div>
                <form>
                    <FormText labelText="Username:" handleChange={handleChange} value={user.username}
                            type="text" name="username" holder="Enter Username..." messages={errors?.username} />
                    <FormText labelText="Password:" handleChange={handleChange} value={user.password}
                            type="text" name="password" holder="Enter Password..." messages={errors?.password} />
                    <div>
                        <button onClick={handleClick} type="button" >Submit</button >
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
