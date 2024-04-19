import { learnSpell, forgetSpell } from "../../services/monsterService";
import { isAuthenticated } from "../../utils/errorUtils";
import styles from "./SpellCard.module.css";
import { useNavigate } from "react-router-dom";

function SpellCard({spell, onDelete, action, monsterId, spellId}) {

    const navigator = useNavigate()

    async function learnMonsterSpell() {
        try {
            await learnSpell(monsterId, spellId);
            navigator("/monsters");
        } catch (error) {
            if (!isAuthenticated(error)) {
                navigator("/");
            } else {
                console.log(error);
            }
        }
    }

    async function forgetMonsterSpell() {
        try {
            await forgetSpell(monsterId, spellId);
            navigator("/monsters");
        } catch (error) {
            if (!isAuthenticated(error)) {
                navigator("/");
            } else {
                console.log(error);
            }
        }
    }

    function handleMonsterSpells() {
        if (action === 'learn') {
            return <button className={styles.learnButton} type="button" onClick={learnMonsterSpell}>Learn</button>
        } else {
            return <button className={styles.forgetButton} type="button" onClick={forgetMonsterSpell}>Forget</button>
        }
    }

    function handleSpells() {
        return (
            <>
                <button className={styles.editButton} type="button" onClick={() => navigator(`/spell/${spell.id}`)}>Edit</button>
                <button className={styles.deleteButton} type="button" onClick={() => onDelete(spell.id)}>Delete</button>
            </>
        );
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
            <div className={styles.buttonContainer}>
                { monsterId ? handleMonsterSpells() : handleSpells() }
            </div>
        </div>
    );
}

export default SpellCard;
