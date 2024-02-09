
import { useState, useEffect } from "react";
import { deleteMonster, getMonsterById } from "../../services/monsterService";
import styles from "./MonsterChoice.module.css";
import { useNavigate, useParams } from "react-router-dom";

function MonsterChoice() {

    const [monster, setMonster] = useState({});

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getMonster();
    }, [id]);


    async function getMonster() {
        try {
            const response = await getMonsterById(id);
            setMonster(response.data);
        } catch(error) {
            console.log(error);
        }
    }

    async function onDelete() {
        try {
            await deleteMonster(id);
            navigator("/");
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <div className={styles.container}>
            <h1>What are your intentions with {monster.name}?</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.editButton} type="button" onClick={() => navigator(`/monster/${id}`)}>Edit {monster.name}</button>
                <button className={styles.deleteButton} type="button" onClick={onDelete}>Delete {monster.name}</button>
                <button className={styles.addButton} type="button" onClick={() => navigator(`/spells/${id}?action=learn`)}>Learn Spell</button>
                <button className={styles.forgetButton} type="button" onClick={() => navigator(`/spells/${id}?action=forget`)}>Forget Spell</button>
            </div>
        </div>
    );
}

export default MonsterChoice;
