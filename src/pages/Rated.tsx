import { useState } from 'react'
import { DisplayType } from './Home'
import { useQuery } from '@tanstack/react-query'
import { ratedMovies, ratedTvShows } from '../api/query'
import ColumnDisplay from '../Components/ColumnDisplay'

const Rated = () => {
    const [activeTab, setActiveTab] = useState<DisplayType>(DisplayType.Movies)
    const { data: ratedMoviesData, isLoading: isLoadingMovies, isError: ratedMovieError } = useQuery({ queryKey: ["ratedMovies"], queryFn: ratedMovies })

    const { data: ratedTvShowsData, isLoading: isLoadingTvShows, isError: ratedTvShowError } = useQuery({ queryKey: ["ratedTvShows"], queryFn: ratedTvShows })

    if (isLoadingMovies || isLoadingTvShows) {
        return <>Loading...</>
    }

    return (
        <div className='container mx-auto my-4'>
            <div className="flex gap-2 pt-6 relative">
                <hr className='absolute bottom-0 h-[2px] w-full bg-slate-200 -z-10' />
                <p onClick={() => setActiveTab(DisplayType.Movies)} className={`${activeTab === DisplayType.Movies && "border-b-2  border-slate-600"} `}>Movies</p>
                <p onClick={() => setActiveTab(DisplayType.TvShows)} className={`${activeTab === DisplayType.TvShows && "border-b-2  border-slate-600"}`}>Tv Shows</p>
            </div>
            <div className="my-4">
                <h3 className='text-center text-xl text-gray-600 bg-slate-300 py-1 w-full' >{
                    activeTab === DisplayType.Movies ? "Rated Movies" : "Tv Shows"
                }</h3>
            </div>
            <div className="">
                <div>
                    {activeTab === DisplayType.Movies ? (
                        ratedMovieError ? (
                            <p className='text-center text-xl font-semibold'>No Data Found...</p>
                        ) : (
                            <ColumnDisplay data={ratedMoviesData.results} displayType={DisplayType.Movies} isRated />
                        )
                    ) : (
                        ratedTvShowError ? (
                            <p className='text-center text-xl font-semibold'>No Data Found...</p>
                        ) : (
                            <ColumnDisplay data={ratedTvShowsData.results} displayType={DisplayType.TvShows} isRated/>
                        )
                    )}

                </div>

            </div>
        </div>
    )
}

export default Rated
