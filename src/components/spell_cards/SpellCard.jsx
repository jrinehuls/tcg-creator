import styles from "./SpellCard.module.css";
import { useNavigate } from "react-router-dom";

function SpellCard({spell, onDelete}) {

    const navigator = useNavigate()

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span>Name: {spell.name}</span>
                <span>Power: {spell.power}</span>
            </div>
            <div className={styles.text}>
                <p>{spell.description}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.editButton} type="button" onClick={() => navigator(`/spell/${spell.id}`)}>Edit</button>
                <button className={styles.deleteButton} type="button" onClick={() => onDelete(spell.id)}>Delete</button>
            </div>
        </div>
    );
}

export default SpellCard;
