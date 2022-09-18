import axios from 'axios'

let url = 'http://127.0.0.1:6969/user'

export const saveDataInDB=(userObject)=>{
    return axios.post(url, userObject)
}

export const fetchDataInDisplay=()=>{
    return axios.get(url)
}

export const deleteUserById=(userId)=>{
    return axios.delete(url+'/'+userId)
}

export const getUserById=(userObject)=>{
    return axios.get(url+'/'+userObject)
}

export const updateUser=(userUpdate)=>{
    return axios.put(url+'/'+userUpdate.id, userUpdate)
}