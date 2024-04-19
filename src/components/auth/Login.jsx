
import { useState } from "react";
import { authenticate } from "../../services/authService.js";
import { getErrorResponse } from "../../utils/errorUtils.js";
import styles from "./Login.module.css";
import AuthForm from "./AuthForm.jsx";
import { useNavigate } from "react-router-dom";

function Login() {

    const defaultUser = {
        username: "",
        password: ""
    }

    const [user, setUser] = useState(defaultUser);
    const [errors, setErrors] = useState(null);

    const navigator = useNavigate();

    async function attemptLogin() {
        try {
            const response = await authenticate(user);
            const token = response.headers['authorization'];
            localStorage.setItem('token', token);
            navigator('/monsters');
            clearForm();
        } catch (e) {
            console.error(e);
            setErrors(getErrorResponse(e));
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

    function clearForm() {
        setUser(defaultUser);
        setErrors(null);
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
