import { useState } from "react";
import { addMonster } from "../../services/monsterService";
import FormText from "./FormText";
import "./MonsterForm.css"
import getErrorResponse from "../../utils/errorUtils";

function MonsterForm() {

    const defaultMonster = {
        name: "",
        hp: 0,
        mp: 0,
        attack: 0,
        defense: 0,
        magicAttack: 0,
        magicDefense: 0,
        speed: 0,
        baseGold: 0,
        baseExp: 0
    };

    const [monster, setMonster] = useState(defaultMonster);
    const [image, setImage] = useState(null);

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

    async function handleClick() {
        const formData = createFormData();
        
        try {
            const response = await addMonster(formData);
            console.log(response.data)
            setMonster(defaultMonster);
        } catch (error) {
            console.log(getErrorResponse(error))
        }
    }

    function handleImage(event) {
        const {files} = event.target;
        setImage(files[0]);
    }


    return(
        <div className="container">
            <h1>Createth Thou Thine Monsta!</h1>
            <div className="form-container">
                <form>
                    <FormText labelText="Name:" handleChange={handleChange} value={monster.name}
                        type="text" name="name" holder="Enter name..."/>
                    <FormText labelText="HP:" handleChange={handleChange} value={monster.hp}
                        type="number" name="hp" holder="Enter HP..."/>
                    <FormText labelText="MP:" handleChange={handleChange} value={monster.mp}
                        type="number" name="mp" holder="Enter MP..."/>
                    <FormText labelText="Attack:" handleChange={handleChange} value={monster.attack}
                        type="number" name="attack" holder="Enter Attack..."/>
                    <FormText labelText="Defense:" handleChange={handleChange} value={monster.defense}
                        type="number" name="defense" holder="Enter Defense..."/>
                    <FormText labelText="Magic Attack:" handleChange={handleChange} value={monster.magicAttack}
                        type="number" name="magicAttack" holder="Enter Magic Attack..."/>
                    <FormText labelText="Magic Defense:" handleChange={handleChange} value={monster.magicDefense}
                        type="number" name="magicDefense" holder="Enter Magic Defense..."/>
                    <FormText labelText="Speed:" handleChange={handleChange} value={monster.speed}
                        type="number" name="speed" holder="Enter Speed..."/>
                    <FormText labelText="Base Gold:" handleChange={handleChange} value={monster.baseGold}
                        type="number" name="baseGold" holder="Enter Base Gold..."/>
                    <FormText labelText="Base Exp:" handleChange={handleChange} value={monster.baseExp}
                        type="number" name="baseExp" holder="Enter Base Exp..."/>
                    <div className="input-area">
                        <label className="input-label">Image:</label>
                        <input className="input-image" onChange={handleImage} type="file" name="image" ></input>
                    </div>
                    <div className="button-container">
                        <button className="submit-button" onClick={handleClick} type="button" >Submit</button >
                    </div>
                </form>
            </div>
        </div>
      );
}

export default MonsterForm;