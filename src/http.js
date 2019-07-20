import axios from 'axios'

let http = axios.create({
    timeout: 60000
    // headers: {}
})
export default http