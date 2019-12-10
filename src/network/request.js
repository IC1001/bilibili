import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL:'http://localhost:8083',
        timeout:3000
    })
    return instance(config)
}