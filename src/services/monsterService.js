import Axios from "axios";

const url = "http://localhost:8080/api/monster";

const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
};

export async function addMonster(formData) {
    return await Axios.post(url, formData, config);
}

export async function getMonsterById(id) {
    return await Axios.get(url + `/${id}`);
}

export async function getAllMonsters() {
  return await Axios.get(url);
}

export async function updateMonster(id, formData) {
    return await Axios.put(url + `/${id}`, formData, config);
}

export async function deleteMonster(id) {
    return await Axios.delete(url + `/${id}`);
}

export async function addSpell(monsterId, spellId) {
    return await Axios.patch(url + `/${monsterId}/add-spell/${spellId}`);
}

export async function getSpells(id) {
    return await Axios.get(url + `/${id}/spells`);   
}
