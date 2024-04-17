
import { useState } from "react";
import { AuthService } from "../../services/authService.js";
import FormText from "../form_input/FormText";


function Login() {
    const authService = new AuthService();

    let defaultUser = {
        username: "",
        password: ""
    }

    const [user, setUser] = useState(defaultUser);
    const [errors, setErrors] = useState(null);

    async function login() {
        try {
            const response = await authService.login();
        } catch (e) {
            console.error(e);
        }
    }

    function handleChange(event) {
        const [name, value] = event.target;
    }

    function handleClick() {

    }

    return(
        <div>
            <h1>Loggeth Thou In</h1>
            <div>
                <form>
                    <FormText labelText="Username:" handleChange={handleChange} value={user.username}
                            type="text" name="username" holder="Enter Username..." messages={errors?.name} />
                    <FormText labelText="Password:" handleChange={handleChange} value={user.password}
                            type="text" name="password" holder="Enter Password..." messages={errors?.description} />
                    <div>
                        <button onClick={handleClick} type="button" >Submit</button >
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
