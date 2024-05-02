import { useState } from "react"
import ColumnDisplay from "../Components/ColumnDisplay"
import { useQuery } from "@tanstack/react-query"
import { fetchMovies, fetchTvShows } from "../api/query"

export enum DisplayType {
    Movies = "movies",
    TvShows = "tvshows"
}

const Home = () => {
    const [page, setPage]= useState<number>(1)
    const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies)
    const {data:movieData, isLoading:isLoadingMovies}= useQuery({queryKey:["movies",page],queryFn:()=>fetchMovies(page)})
    const {data:tvShowData, isLoading:isLoadingTvShows}= useQuery({queryKey:["tvshows", page],queryFn:()=>fetchTvShows(page)})
    return (
        <div className="my-4">
            <div className="my-4">
                <div className="mx-auto bg-slate-200 w-fit">
                    <button onClick={() => setDisplayType(DisplayType.Movies)} className={` px-2 py-1 ${displayType === DisplayType.Movies && "bg-sky-600 text-white"}`}>Movies</button>
                    <button onClick={() => setDisplayType(DisplayType.TvShows)} className={` px-2 py-1 ${displayType === DisplayType.TvShows && "bg-sky-600 text-white"}`}>Tv Shows</button>
                </div>
            </div>
            <div className="flex justify-center my-2">
            <div className="w-fit bg-slate-400 px-1 py-1">
                <label className=" text-white" htmlFor="page">Page: </label>
                <input className="text-center text-slate-600 focus:outline-none" type="number" min={1} max={10} value={page} onChange={e=>setPage(Number(e.target.value))} />
            </div>
            </div>
            <div className="">
                {isLoadingMovies || isLoadingTvShows ? "Loading..." : (
                    <div>
                        
                    {displayType=== DisplayType.Movies ? <ColumnDisplay data={movieData.results} displayType={DisplayType.Movies} /> : <ColumnDisplay data={tvShowData.results} displayType={DisplayType.TvShows} />}
                </div>
                )}
            </div>
            
        </div>
    )
}

export default Home