import Axios from "axios";

const url = "http://localhost:8080/api/spell";

export async function addSpell(spell) {
    const config = {
        headers: {
          'content-type': 'application/json',
        },
    };
    return await Axios.post(url, spell, config);
}

export async function getAllSpells() {

  return await Axios.get(url);
  
}
