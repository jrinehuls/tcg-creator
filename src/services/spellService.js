import Axios from "axios";

const url = "http://localhost:8080/api/spell";

export async function addSpell(formData) {
    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
    };
    return await Axios.post(url, formData, config);
}

export async function getAllSpells() {

  return await Axios.get(url);
  
}
