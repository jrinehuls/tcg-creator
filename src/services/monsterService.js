import Axios from "axios";

const url = "http://localhost:8080/api/monster";

export async function addMonster(formData) {
    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
    };
    return await Axios.post(url, formData, config);
}

export async function getAllMonsters() {

  return await Axios.get(url);
  
}

export async function getMonsterById(id) {

    return await Axios.get(url + `/${id}`);
    
}
  
