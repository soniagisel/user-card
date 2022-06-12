import axios from 'axios'

const fetchUserData = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/')

        const userData = {
            name: response.data.results[0].name,
            login: response.data.results[0].login,
            picture: response.data.results[0].picture,
            email: response.data.results[0].email,
            dob: response.data.results[0].dob,
            location: response.data.results[0].location,
            cell: response.data.results[0].cell,
        }

        return userData
    } catch (e) {
        console.error(e.message)
    }
}

export default fetchUserData
