import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addMonster, getMonsterById, updateMonster } from "../../services/monsterService";
import FormText from "./FormText";
import FormFieldError from "../form_field_error/FormFieldError";
import getErrorResponse from "../../utils/errorUtils";
import styles from "./MonsterForm.module.css";

function MonsterForm() {

    const defaultMonster = {
        name: "",
        hp: "",
        mp: "",
        attack: "",
        defense: "",
        magicAttack: "",
        magicDefense: "",
        speed: "",
        baseGold: "",
        baseExp: ""
    };

    const [monster, setMonster] = useState(defaultMonster);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState(null);

    const ref = useRef();
    const navigator = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        if (id) {
            getMonster(id);
        }
    }, [id])

    async function getMonster(id) {
        try {
            const response = await getMonsterById(id);
            setMonster(response.data);
        } catch (error) {
            if (error.response.status === 404) {
                navigator("/");
            } else {
                console.log(error);
            }
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setMonster(p => {
            return {
                ...p,
                [name]: value
            };
        })
    }

    function createFormData() {
        const formData = new FormData();
        formData.append('name', monster.name);
        formData.append('hp', monster.hp);
        formData.append('mp', monster.mp);
        formData.append('attack', monster.attack);
        formData.append('defense', monster.defense);
        formData.append('magicAttack', monster.magicAttack);
        formData.append('magicDefense', monster.magicDefense);
        formData.append('speed', monster.speed);
        formData.append('baseGold', monster.baseGold);
        formData.append('baseExp', monster.baseExp);
        if (image) {
            formData.append('image', image); // Sends null or undefined as a string if no upload
        }

        return formData;
    }

    function clearForm() {
        setMonster(defaultMonster);
        ref.current.value = null;
        setErrors(null);
    }

    async function handleClick() {
        const formData = createFormData();
        
        try {
            if (id) {
                await updateMonster(id, formData);
            } else {
                await addMonster(formData);
            }
            clearForm();
            navigator("/");
        } catch (error) {
            setErrors(getErrorResponse(error));
        }
    }

    function handleImage(event) {
        const {files} = event.target;
        setImage(files[0]);
    }


    return(
        <div className={styles.container}>
            <h1>Createth Thou Thine Monster</h1>
            <div className={styles.formContainer}>
                <form>
                    <FormText labelText="Name:" handleChange={handleChange} value={monster.name}
                        type="text" name="name" holder="Enter Name..." messages={errors?.name} />
                    <FormText labelText="HP:" handleChange={handleChange} value={monster.hp}
                        type="number" name="hp" holder="Enter HP..." messages={errors?.hp} />
                    <FormText labelText="MP:" handleChange={handleChange} value={monster.mp}
                        type="number" name="mp" holder="Enter MP..." messages={errors?.mp} />
                    <FormText labelText="Attack:" handleChange={handleChange} value={monster.attack}
                        type="number" name="attack" holder="Enter Attack..." messages={errors?.attack} />
                    <FormText labelText="Defense:" handleChange={handleChange} value={monster.defense}
                        type="number" name="defense" holder="Enter Defense..." messages={errors?.defense} />
                    <FormText labelText="Magic Attack:" handleChange={handleChange} value={monster.magicAttack}
                        type="number" name="magicAttack" holder="Enter Magic Attack..." messages={errors?.magicAttack} />
                    <FormText labelText="Magic Defense:" handleChange={handleChange} value={monster.magicDefense}
                        type="number" name="magicDefense" holder="Enter Magic Defense..." messages={errors?.magicDefense} />
                    <FormText labelText="Speed:" handleChange={handleChange} value={monster.speed}
                        type="number" name="speed" holder="Enter Speed..." messages={errors?.speed} />
                    <FormText labelText="Base Gold:" handleChange={handleChange} value={monster.baseGold}
                        type="number" name="baseGold" holder="Enter Base Gold..." messages={errors?.baseGold} />
                    <FormText labelText="Base Exp:" handleChange={handleChange} value={monster.baseExp}
                        type="number" name="baseExp" holder="Enter Base Exp..." messages={errors?.baseExp} />
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}>Image:</label>
                        <div className={styles.inputArea}>
                            <input className={styles.inputImage} onChange={handleImage} type="file" name="image" ref={ref} ></input>
                            <FormFieldError messages={errors?.image} />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.submitButton} onClick={handleClick} type="button" >Submit</button >
                    </div>
                </form>
            </div>
        </div>
      );
}

export default MonsterForm;