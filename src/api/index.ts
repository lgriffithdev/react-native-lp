import axios from 'axios'
import { API_URL, API_TOKEN } from '@env'

const getApiContent = () => {
    return axios.get(`${API_URL}?api_key=${API_TOKEN}`)
        .then((response) => response.data)
        .catch((err) => console.error(err.message))
}

export default getApiContent
