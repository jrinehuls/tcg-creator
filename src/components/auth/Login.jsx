
import { useState } from "react";
import { authenticate } from "../../services/authService.js";
import { getErrorResponse } from "../../utils/errorUtils.js";
import styles from "./Login.module.css";
import AuthForm from "./AuthForm.jsx";

function Login() {

    const defaultUser = {
        username: "",
        password: ""
    }

    const [user, setUser] = useState(defaultUser);
    const [errors, setErrors] = useState(null);

    async function attemptLogin() {
        try {
            const response = await authenticate(user);
            const token = response.headers['authorization'];
            localStorage.setItem('token', token);
            console.log(localStorage.getItem('token'));
        } catch (e) {
            setErrors(getErrorResponse(e));
            console.error(e);
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
        attemptLogin();
    }

    return(
        <div className={styles.container}>
            <h1>Loggeth Thou In</h1>
            <div className={styles.formContainer}>
                <AuthForm handleClick={handleClick} handleChange={handleChange} user={user} errors={errors}/>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}

export default Login;
