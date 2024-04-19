import Axios from "axios";

const url = "http://localhost:8080/api/monster";

let token = localStorage.getItem("token");

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token 
    }
};

export async function addMonster(formData) {
    return await Axios.post(url, formData, config);
}

export async function getMonsterById(id) {
    return await Axios.get(url + `/${id}`, config);
}

export async function getAllMonsters() {
  return await Axios.get(url, config);
}

export async function updateMonster(id, formData) {
    return await Axios.put(url + `/${id}`, formData, config);
}

export async function deleteMonster(id) {
    return await Axios.delete(url + `/${id}`, config);
}

export async function getSpellsById(id) {
    return await Axios.get(url + `/${id}/spells`, config);   
}

export async function learnSpell(monsterId, spellId) {
    return await Axios.patch(url + `/${monsterId}/add-spell/${spellId}`, null, config);
}

export async function forgetSpell(monsterId, spellId) {
    return await Axios.patch(url + `/${monsterId}/remove-spell/${spellId}`, null, config);
}
