import { useState } from "react";
import { addMonster } from "../../services/monsterService";
import "./MonsterForm.css"

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
    const [image, setImage] = useState();

    function handleChange(event) {
        const {name, value} = event.target;

        setMonster(p => {
            return {
                ...p,
                [name]: value
            };
        })
    }

    async function handleClick() {
        const formData = new FormData();
        formData.append('image', image);
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
        try {
            const response = await addMonster(formData);
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    function handleImage(event) {
        const {files} = event.target;
        setImage(files[0]);
    }


    return(
        <div className="container">
            <form>
                <div className="">
                    <label>Name:</label>
                    <input className="" onChange={handleChange} type="text" name="name" value={monster.name} placeholder="Enter name..."></input>
                </div>
                <div className="">
                    <label>HP:</label>
                    <input className="" onChange={handleChange} type="number" name="hp" value={monster.hp}></input>
                </div>
                <div className="">
                    <label>MP:</label>
                    <input className="" onChange={handleChange} type="number" name="mp" value={monster.mp}></input>
                </div>
                <div className="">
                    <label>Attack:</label>
                    <input className="" onChange={handleChange} type="number" name="attack" value={monster.attack}></input>
                </div>
                <div className="">
                    <label>Defense:</label>
                    <input className="" onChange={handleChange} type="number" name="defense" value={monster.defense}></input>
                </div>
                <div className="">
                    <label>Magic Attack:</label>
                    <input className="" onChange={handleChange} type="number" name="magicAttack" value={monster.magicAttack}></input>
                </div>
                <div className="">
                    <label>Magic Defense:</label>
                    <input className="" onChange={handleChange} type="number" name="magicDefense" value={monster.magicDefense}></input>
                </div>
                <div className="">
                    <label>Speed:</label>
                    <input className="" onChange={handleChange} type="number" name="speed" value={monster.speed}></input>
                </div>
                <div className="">
                    <label>Base Gold:</label>
                    <input className="" onChange={handleChange} type="number" name="baseGold" value={monster.baseGold}></input>
                </div>
                <div className="">
                    <label>Base Exp:</label>
                    <input className="" onChange={handleChange} type="number" name="baseExp" value={monster.baseExp}></input>
                </div>
                <div className="">
                    <label>Image:</label>
                    <input className="" onChange={handleImage} type="file" name="image" ></input>
                </div>
                <div className="">
                    <button className="" onClick={handleClick} type="button" >Save</button >
                </div>
            </form>
        </div>
      );
}

export default MonsterForm;