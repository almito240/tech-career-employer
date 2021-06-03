import { API } from '../app.utils'
import axios from 'axios'

const headers = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
export async function getStudentById(Id: string) {
    try {
        if (Id.length === 24) {
            return await(await axios.get(`${API}/students/student/${Id}`,headers)).data.data;
        }
        return 'bad id, check id'
    }
    catch (err) { console.error(err) }
}

export async function getStudent(credentials: any, body:any) {
    const { email } = credentials;
    // const body = {"student":{"email":"test3@gmail.com"}} //example
    try {
        if (email) {
            return await(await axios.post(`${API}/students/single`,body,headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
}

export async function updateStudent(credentials: any) {
    const { _id } = credentials;
    const body = {student:credentials} // example : {student:{phone:045434343,email: tech@gmail.com}}
    try {
        if (_id) {
            return await(await axios.put(`${API}/students/student/${_id}`,body,headers)).data.data
        }
        return 'email is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function deleteStudent(credentials: any) {
    const { _id } = credentials
    try {
        if (_id) {
           return await(await axios.delete(`${API}/students/student/${_id}`,headers)).data.data
        }
        return 'id is required'
    }
    catch (err) { console.error(err) }
    finally { }
}
export async function getAllStudents() {
    try {
        return await (await axios.get(`${API}/students/all`,headers)).data.data
    }
    catch (err) { console.error(err) }
}

export async function getManyStudents(){
    try {
        return await (await axios.post(`${API}/students/all`,headers)).data.data
    }
    catch (err) { console.error(err) }
}