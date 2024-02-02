import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addSpell, getSpellById, updateSpell } from "../../services/spellService";
import FormText from "../form_input/FormText";
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

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getSpell();
        }
    }, [id])

    async function getSpell() {
        try {
            const response = await getSpellById(id);
            if (response.status === 200) {
                setSpell(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function clearForm() {
        setSpell(defaultSpell);
        setErrors(null);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setSpell(p => {
            return {
                ...p,
                [name]: value
            };
        })
    }

    async function handleClick() {
        try {
            if (id) {
                await updateSpell(id, spell);
            } else {
                await addSpell(spell);
            }
            clearForm();
            navigator("/spells");
        } catch (error) {
            setErrors(getErrorResponse(error));
        }
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
