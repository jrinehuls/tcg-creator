
import { useState } from "react";
import { register } from "../../services/authService.js";
import { getErrorResponse } from "../../utils/errorUtils.js";
import styles from "./Login.module.css";
import AuthForm from "./AuthForm.jsx";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const defaultUser = {
        username: "",
        password: ""
    }

    const [user, setUser] = useState(defaultUser);
    const [errors, setErrors] = useState(null);
    const navigator = useNavigate();

    async function attemptRegister() {
        try {
            await register(user);
            navigator('/');
            clearForm();
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

    function clearForm() {
        setUser(defaultUser);
        setErrors(null);
    }

    function handleClick() {
        attemptRegister();
    }

    return(
        <div className={styles.container}>
            <h1>Signeth Thou Up</h1>
            <div className={styles.formContainer}>
                <AuthForm handleClick={handleClick} handleChange={handleChange} user={user} errors={errors}/>
            </div>
        </div>
    );
}

export default SignUp;
