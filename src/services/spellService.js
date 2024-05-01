import Axios from "axios";

const url = "http://localhost:8080/api/spell";

function getConfig() {
    console.log(localStorage.getItem('token'));
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")
        }
    }
}

export async function addSpell(spell) {
    console.log(getConfig())
    return await Axios.post(url, spell, getConfig());
}

export async function getAllSpells() {
    return await Axios.get(url, getConfig());
}

export async function getSpellById(id) {
    return await Axios.get(url + "/" + id, getConfig());
}

export async function updateSpell(id, spell) {
    return await Axios.put(url + "/" + id, spell, getConfig());
}

export async function deleteSpell(id) {
    return await Axios.delete(url + "/" + id, getConfig());
}
