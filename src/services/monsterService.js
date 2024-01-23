import Axios from "axios";

const url = "http://localhost:8080/api/monster";

export async function addMonster(monster) {
    return await Axios.post(url, monster, {});
}
