import { addSpell } from "../../services/monsterService";
import styles from "./SpellCard.module.css";
import { useNavigate } from "react-router-dom";

function SpellCard({spell, onDelete, monsterId, spellId}) {

    const navigator = useNavigate()

    async function addMonsterSpell() {
        try {
            await addSpell(monsterId, spellId);
            navigator("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span>Name: {spell.name}</span>
                <span>Power: {spell.power}</span>
            </div>
            <div className={styles.text}>
                <p>{spell.description}</p>
            </div>
            {monsterId ? 
            <div className={styles.buttonContainer}>
                <button className={styles.learnButton} type="button" onClick={addMonsterSpell}>Learn</button>
            </div> : 
            <div className={styles.buttonContainer}>
                <button className={styles.editButton} type="button" onClick={() => navigator(`/spell/${spell.id}`)}>Edit</button>
                <button className={styles.deleteButton} type="button" onClick={() => onDelete(spell.id)}>Delete</button>
            </div>}
        </div>
    );
}

export default SpellCard;
