import {createContext,useState,useEffect} from 'react';
import { getUserWS,logoutWS } from '../services/auth-endpoint'
export const Ctx = createContext();
export const AppCtxProv = (props) => {
    const [user,setUser] = useState(null)
    //me sservir para modificar mi user
    const login = (user) => setUser(user)

    const logout = () => (setUser(null), logoutWS())

    useEffect(()=>{
        async function checkSession(){
            try{
                const {data} = await getUserWS()
                console.log("exitoso",data.result._id ? "si":"no")
                setUser(data.result._id  ?  data.result : null)
            }catch(error){
                console.log("error context",error)
                setUser( null)
            }
        }
        checkSession()
    },[]);

    const value = {
        user,
        login,
        logout
    }

   return  <Ctx.Provider {...props} value={value} />
}