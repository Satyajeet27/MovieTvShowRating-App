import { useQuery } from '@tanstack/react-query'
import { fetchMovieDetails } from '../api/query'
import { useParams } from 'react-router-dom'

const Movie = () => {
    const { id } = useParams<string>()
    if (!id) {
        return <div>Invalid Movie Id</div>
    }

    const { data, isLoading } = useQuery({ queryKey: ["movie"], queryFn: () => fetchMovieDetails(id) })
    
    if(isLoading){
        return <div className="">Loading...</div>
    }
    console.log(Math.floor(data.vote_average*10))
    return (
        <div className='container mx-auto p-2'>
            <div className="border py-8">
                <p className='text-2xl md:text-3xl text-center pb-8 font-bold'>{data.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 px-10">
                    <div className="mx-auto mb-4 me-4">
                        <img className='max-h-[30rem] object-cover ' src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="" />
                    </div>
                    <div className="col-span-2 space-y-2">
                        <div className="leading-tight">
                            <p className='font-semibold'>Is the Movie for Adults?</p>
                            <p className='text-slate-700'>{data.adults ? "Yes" : "No"}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Budget</p>
                            <p className='text-slate-700'>$ {data.budget}</p>
                        </div>
                        <div className="w-full">
                            <p className='font-semibold'>Genre</p>
                            <p className='flex flex-wrap gap-2'>{data?.genres.map((genre: { id: number, name: string } , index:number) => (
                                <span key={index} className='text-nowrap bg-slate-500 text-white text-sm px-3 py-[0.1rem] me-2 rounded-md'>{genre.name}</span>
                            ))}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Status</p>
                            <p className='text-slate-700'>{data.status}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Release Date</p>
                            <p className='text-slate-700'>{data.release_date}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Runtime</p>
                            <p className='text-slate-700'>{data.runtime}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Language</p>
                            <p>{data?.spoken_languages.map((lang: { name: string }, index: string) => (
                                <span key={index} className='me-2'>{lang.name}</span>
                            ))}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Overview</p>
                            <p className='text-slate-700'>{data.overview}</p>
                        </div>
                        <div className="">
                            <p className='font-semibold'>Vote Average</p>
                            <div className='w-full md:w-2/3 h-4 bg-slate-300 rounded-md'>
                                <div style={{width:`${Math.floor(data.vote_average * 10)}%`}} className={ "rounded-s-md bg-amber-500 h-full text-center text-xs text-slate-800"}>{Math.floor(data.vote_average*10)}%</div>
                                {/* <div className={`w-[47%] bg-amber-500 h-full text-center text-xs text-slate-800`}>{Math.floor(data.vote_average*10)}%</div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Movie