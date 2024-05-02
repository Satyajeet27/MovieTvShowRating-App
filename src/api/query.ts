import axios from "axios";

export const fetchMovies= async(page:number)=>{
    try {
        const {data}= await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,{
            headers: {
                accept: 'application/json',
                Authorization:`Bearer ${import.meta.env.VITE_USER_AUTH}`
              }
        }) 
        return data
    } catch (error) {
        // console.log(error)
    }
}
export const fetchTvShows= async(page:number)=>{
    try {
        const {data}= await axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,{
            headers: {
                accept: 'application/json',
                Authorization:`Bearer ${import.meta.env.VITE_USER_AUTH}`
              }
        })
        return data
    } catch (error) {
        // console.log(error)
    }
}

export const fetchMovieDetails= async(movie_id:string)=>{
    try {
        const {data}= await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,{
            headers: {
                accept: 'application/json',
                Authorization:`Bearer ${import.meta.env.VITE_USER_AUTH}`
              }
        })
        return data
    } catch (error) {
        // console.log(error)
    }
}
export const fetchTvShowDetails= async(tvshow_id:string)=>{
    try {
        const {data}= await axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}?language=en-US`,{
            headers: {
                accept: 'application/json',
                Authorization:`Bearer ${import.meta.env.VITE_USER_AUTH}`
              }
        })
        return data
    } catch (error) {
        // console.log(error)
    }
}

export const rateMovie= async(movie_id:number, rating:number)=>{
    try {
        const {data}= await axios(`https://api.themoviedb.org/3/movie/${movie_id}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
        method:"POST",
        headers:{ 
            accept:"application/json",
            'content-type': 'application/json;charset=utf-8',
            // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        },
        data:JSON.stringify({"value":rating})
    }
    )
    return data
    } catch (error) {
        
    }
}
export const rateTvShow= async(tvshow_id:number, rating:number)=>{
    try {
        const {data}= await axios(`https://api.themoviedb.org/3/tv/${tvshow_id}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
        method:"POST",
        headers:{ 
            accept:"application/json",
            'content-type': 'application/json;charset=utf-8',
            // Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        },
        data:JSON.stringify({"value":rating})
    }
    )
    return data
    } catch (error) {
        
    }
}

export const ratedMovies= async()=>{
    try {
        const {data}= await axios.get(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`)
        // console.log(data)
        if(data) return data
    
    } catch (error) {
        // console.log(error)
    }
}
export const ratedTvShows= async()=>{
    try {
        const {data}= await axios.get(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${import.meta.env.VITE_API_KEY}`)
        // console.log(data)
        if(data) return data
    } catch (error) {
        
    }
}
