import FormText from "../form_input/FormText";
import styles from "./Login.module.css";

function AuthForm({handleClick, handleChange, user, errors}) {
    return (
        <div className={styles.formContainer}>
            <form>
                <FormText labelText="Username:" handleChange={handleChange} value={user.username}
                        type="text" name="username" holder="Enter Username..." messages={errors?.username} />
                <FormText labelText="Password:" handleChange={handleChange} value={user.password}
                        type="text" name="password" holder="Enter Password..." messages={errors?.password} />
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton} onClick={handleClick} type="button" >Submit</button >
                </div>
            </form>
        </div>
    );
}

export default AuthForm;
