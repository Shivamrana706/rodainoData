import axios from 'axios'

const URL = 'http://localhost:8000';


export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data);      

    }catch (error){
        console.log("Error while calling API AddUser",error)
    }
    
}

export const getUsers = async () => {
    try{
        return await axios.get(`${URL}/get`);
    }catch(error){
        console.log("Error while calling API getUsers",error)
    }
}
export const getUser = async (id) =>{
    try{
        return await axios.get(`${URL}/${id}`); 
    }catch(error){
        console.log("Error while calling API getUser",error)
    }

}

export const editUser = async (user,id) =>{
    console.log("editUser data ",user);
    try{
        return await axios.put(`${URL}/${id}`, user);         
    }catch(error){
        
        console.log("Error while calling API EditUser",error)
    }

}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);        
        
    } catch (error) {
        console.log("Error while calling DeleteUser");

    }
}
