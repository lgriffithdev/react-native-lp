import axios from 'axios'
import { API_URL } from '@env'

const getContent = async (endpoint: string) => {    
    return await axios.get(`${API_URL}/${endpoint}`)
        .then((response) => response.data)
        .catch((err) => console.error(err.message))
}

export default getContent
