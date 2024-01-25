
function FormText({labelText, handleChange, value, type, name, holder}) {


    return(
        <div className="input-area">
            <label className="input-label">{labelText}</label>
            <input className="input-text" onChange={handleChange} type={type} name={name} value={value} placeholder={holder}></input>
        </div>
    );
}

export default FormText;
