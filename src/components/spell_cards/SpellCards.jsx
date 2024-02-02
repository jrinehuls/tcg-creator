import { useState, useEffect } from "react";
import { getAllSpells, deleteSpell } from "../../services/spellService";
import SpellCard from "./SpellCard";
import styles from "./SpellCards.module.css";

function SpellCards() {

    const [spells, setSpells] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getSpells();
    },[refresh])

    async function getSpells() {
        try {
            const response = await getAllSpells();
            setSpells(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function onDelete(id) {
        try {
            const response = await deleteSpell(id);
            if (response.status === 204) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className={styles.container}>
            <h1>Your Spells:</h1>
            <div className={styles.cardContainer}>
                {spells.map(spell => {
                    return <SpellCard key={spell.id} spell={spell} onDelete={onDelete}/>
                })}
            </div>
        </div>
    );

}

export default SpellCards;
