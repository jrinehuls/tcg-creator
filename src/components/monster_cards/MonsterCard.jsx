import styles from "./MonsterCard.module.css"
import { useNavigate } from "react-router-dom";

function MonsterCard( {monster} ) {

    const navigator = useNavigate()

    return(
        <div className={styles.card} onClick={() => navigator(`/monster/${monster.id}`)}>
            <div className={styles.topStats}>
                <span className={styles.topTextItems}>{monster.name}</span>
                <span className={styles.topTextItems}>{monster.hp} HP</span>
            </div>
            <div className={styles.imageWindow}>
                <img className={styles.image} src={`data:image/${monster.imageExtension};base64,${monster.image}`}></img>
            </div>
            <div className={styles.statsContainer}>
                <div className={styles.statsRow}>
                    <div>Attack:{monster.attack}</div>
                    <div>Defense:{monster.defense}</div>
                </div>
                <div className={styles.statsRow}>
                    <div>Speed:{monster.speed}</div>
                    <div>MP:{monster.mp}</div>
                </div>
                <div className={styles.statsRow}>
                    <div>Magic Attack:{monster.magicAttack}</div>
                    <div>Magic Defense:{monster.magicDefense}</div>
                </div>
                <div className={styles.statsRow}>
                    <div>Exp:{monster.baseExp}</div>
                    <div>Gold:{monster.baseGold}</div>
                </div>
            </div>
            <div className={styles.spellContainer}>
                Spells will go here
            </div>
        </div>
    );

}

export default MonsterCard;
