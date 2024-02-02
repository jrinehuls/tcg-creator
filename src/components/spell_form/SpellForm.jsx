import { useState } from "react";
import { addSpell } from "../../services/spellService";
import FormText from "../form_input/FormText";
import FormFieldError from "../form_field_error/FormFieldError";
import getErrorResponse from "../../utils/errorUtils";
import styles from "./SpellForm.module.css";

const defaultSpell = {
    name: "",
    description: "",
    power: ""
}

function SpellForm() {

    const [spell, setSpell] = useState(defaultSpell);
    const [errors, setErrors] = useState(null);

    function handleChange(event) {
        const {name, value} = event.target;

        setSpell(p => {
            return {
                ...p,
                [name]: value
            };
        })
    }

    async function createSpell() {
        try {
            const response = await addSpell(spell);
            console.log(response.status);
            setSpell(defaultSpell);
        } catch (error) {
            setErrors(getErrorResponse(error));
            console.log(errors);
        }
    }

    function handleClick() {
        console.log(spell);
        createSpell();

    }

    return(
        <div className={styles.container}>
            <h1>Createth Thou Thine Spell</h1>
            <div className={styles.formContainer}>
                <form>
                    <FormText labelText="Name:" handleChange={handleChange} value={spell.name}
                            type="text" name="name" holder="Enter Name..." messages={errors?.name} />
                    <FormText labelText="Description:" handleChange={handleChange} value={spell.description}
                            type="text" name="description" holder="Enter Description..." messages={errors?.description} />
                    <FormText labelText="Power:" handleChange={handleChange} value={spell.power}
                            type="number" name="power" holder="Enter Power..." messages={errors?.power} />
                    <div className={styles.buttonContainer}>
                        <button className={styles.submitButton} onClick={handleClick} type="button" >Submit</button >
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SpellForm;
