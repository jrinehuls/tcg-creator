import styles from "./FormText.module.css"
import FormFieldError from "../form_field_error/FormFieldError"

function FormText({labelText, handleChange, value, type, name, holder, messages}) {

    return(
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{labelText}</label>
            <div className={styles.inputArea}>
                <input className={styles.inputText} onChange={handleChange} type={type} name={name} value={value} placeholder={holder}></input>
                <FormFieldError messages={messages} />
            </div>
        </div>
    );
    
}

export default FormText;
