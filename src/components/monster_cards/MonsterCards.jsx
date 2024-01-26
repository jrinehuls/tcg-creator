import { useEffect, useState } from "react";
import { getAllMonsters } from "../../services/monsterService";
import MonsterCard from "./MonsterCard";
import "./MonsterCards.css"


function MonsterCards() {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        getMonsters()
    }, [])

    async function getMonsters() {
        try {
            const response = await getAllMonsters();
            console.log(response.data);
            setMonsters(response.data);
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div>
            {monsters.map(monster => {
                return <MonsterCard key={monster.id} />
            })}
        </div>
    );

}

export default MonsterCards;
