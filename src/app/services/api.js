import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production'

//const baseURL = isProduction ? 'https://mariachissstacos.com/' : "http://localhost:3001/api" 
const baseURL =  'https://mariachissstacos.herokuapp.com/api'  
export const _api = axios.create({
    baseURL,
    withCredentials:true
});