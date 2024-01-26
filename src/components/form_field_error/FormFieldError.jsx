import styles from "./FormFieldError.module.css"

function FormFieldError({messages}) {

    return(
        messages &&
        messages.map((message, index) => {
            return <li key={index}>{message}</li>
        }) 
    );

}

export default FormFieldError;
