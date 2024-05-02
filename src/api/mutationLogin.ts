import axios from "axios"

export const mutationLogin= async()=>{
    try {
        const {data}= await axios.get("https://api.themoviedb.org/3/authentication/guest_session/new",{
            headers:{
                Accept:"application/json",
                Authorization:`Bearer ${import.meta.env.VITE_USER_AUTH}`
            }
        })
        // console.log(data)
        return data
    } catch (error) {
        // console.log(error)
    }
}