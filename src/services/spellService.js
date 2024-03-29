import Axios from "axios";

const url = "http://localhost:8080/api/spell";

const config = {
    headers: {
      'content-type': 'application/json',
    },
};

export async function addSpell(spell) {
    return await Axios.post(url, spell, config);
}

export async function getAllSpells() {
    return await Axios.get(url);
}

export async function getSpellById(id) {
    return await Axios.get(url + "/" + id);
}

export async function updateSpell(id, spell) {
    return await Axios.put(url + "/" + id, spell, config);
}

export async function deleteSpell(id) {
    return await Axios.delete(url + "/" + id);
}
