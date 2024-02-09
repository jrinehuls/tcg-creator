
import styles from "./SpellArea.module.css"

function SpellArea({spell}) {
    return(
        <div className={styles.spellContainer}>
            <div className={styles.text}>
                <div className={styles.name}>
                    {spell.name}
                </div>
                <div className={styles.description}>
                    {spell.description}
                </div>
            </div>
            <div className={styles.power}>
                {spell.power}                
            </div>
        </div>
    );
}

export default SpellArea;
