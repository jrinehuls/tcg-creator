import "./FormText.css"
import FormFieldError from "../form_field_error/FormFieldError"

function FormText({labelText, handleChange, value, type, name, holder, messages}) {


    return(
        <div className="input-container">
            <label className="input-label">{labelText}</label>
            <div className="input-area">
                <input className="input-text" onChange={handleChange} type={type} name={name} value={value} placeholder={holder}></input>
                <FormFieldError messages={messages} />
            </div>
        </div>
    );
}

export default FormText;
