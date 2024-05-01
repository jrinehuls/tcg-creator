import Axios from "axios";

const url = "http://localhost:8080/api/monster";

function getConfig() {
    console.log(localStorage.getItem('token'));
    return {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem("token") 
        }
    }
}

export async function addMonster(formData) {
    return await Axios.post(url, formData, getConfig());
}

export async function getMonsterById(id) {
    return await Axios.get(url + `/${id}`, getConfig());
}

export async function getAllMonsters() {
    return await Axios.get(url, getConfig());
}

export async function updateMonster(id, formData) {
    return await Axios.put(url + `/${id}`, formData, getConfig());
}

export async function deleteMonster(id) {
    return await Axios.delete(url + `/${id}`, getConfig());
}

export async function getSpellsById(id) {
    return await Axios.get(url + `/${id}/spells`, getConfig());   
}

export async function learnSpell(monsterId, spellId) {
    return await Axios.patch(url + `/${monsterId}/add-spell/${spellId}`, {}, getConfig());
}

export async function forgetSpell(monsterId, spellId) {
    return await Axios.patch(url + `/${monsterId}/remove-spell/${spellId}`, {}, getConfig());
}
