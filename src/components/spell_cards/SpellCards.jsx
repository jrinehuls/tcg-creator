import { useState, useEffect } from "react";
import { getAllSpells, deleteSpell } from "../../services/spellService";
import { getSpellsById } from "../../services/monsterService";
import { useParams, useLocation } from "react-router-dom";
import SpellCard from "./SpellCard";
import styles from "./SpellCards.module.css";

let action = null;

function SpellCards() {

    const [spells, setSpells] = useState([]);
    const [monsterSpells, setMonsterSpells] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const {monsterId} = useParams();
    const {search} = useLocation();

    useEffect(() => {

        const params = new URLSearchParams(search);
        action = params.get('action');

        getSpells();
        if (monsterId) {
            getMonsterSpells();
        }
    }, [refresh])

    async function getSpells() {
        try {
            const response = await getAllSpells();
            setSpells(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function getMonsterSpells() {
        try {
            const response = await getSpellsById(monsterId);
            setMonsterSpells(response.data)
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

    function renderSpellsMonsterKnows() {
        return monsterSpells.map(spell => {
            return <SpellCard key={spell.id} spell={spell} action={action} monsterId={monsterId} spellId={spell.id}/>
        })
    }

    function renderSpellsMonsterDoesntKnow() {
        return spells.filter(spell => !monsterSpells.map(monsterSpell => monsterSpell.id).includes(spell.id)).map(spell => {
            return <SpellCard key={spell.id} spell={spell} action={action} monsterId={monsterId} spellId={spell.id}/>
        })
    }

    function renderMonsterSpells(action) {
        if (action === 'learn') {
            return renderSpellsMonsterDoesntKnow();
        } else {
            return renderSpellsMonsterKnows();
        }
    }

    function renderAllSpells() {
        return spells.map(spell => {
            return <SpellCard key={spell.id} spell={spell} onDelete={onDelete} spellId={spell.id}/>
        })
    }

    return(
        <div className={styles.container}>
            <h1>Your Spells:</h1>
            <div className={styles.cardContainer}>
                { monsterId ? renderMonsterSpells(action) : renderAllSpells() }
            </div>
        </div>
    );

}

export default SpellCards;
