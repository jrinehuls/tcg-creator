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
            <div>
                Spells will go here
            </div>
        </div>
    );

}

export default MonsterCard;
