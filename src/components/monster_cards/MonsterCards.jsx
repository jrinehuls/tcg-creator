import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMonsters } from "../../services/monsterService";
import MonsterCard from "./MonsterCard";
import { isAuthenticated } from "../../utils/errorUtils";
import styles from "./MonsterCards.module.css";


function MonsterCards() {

    const [monsters, setMonsters] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getMonsters()
    }, [])

    async function getMonsters() {
        try {
            const response = await getAllMonsters();
            console.log(response.data);
            setMonsters(response.data);
        } catch (error) {
            if (!isAuthenticated(error)) {
                navigator('/');
            } else {
                console.log(error);
            }
        }

    }

    return(
        <div className={styles.container}>
            <h1>Your Cards:</h1>
            <div className={styles.cardContainer}>
                {monsters.map(monster => {
                    return <MonsterCard key={monster.id} monster={monster} />
                })}
            </div>
        </div>
    );

}

export default MonsterCards;
