import { useQuery } from '@tanstack/react-query'
import {  fetchTvShowDetails } from '../api/query'
import { useParams } from 'react-router-dom'
import React, { ReactHTMLElement, useState } from 'react'

const TvShow = () => {
    const { id } = useParams<string>()
    
    if (!id) {
        return <div>Invalid TvShow Id</div>
    }
    const [activeIndex, setActiveIndex]= useState(null)
    const toggleAccordian= (index:any)=>{
        setActiveIndex(activeIndex===index?null:index)
    }

    const { data, isLoading } = useQuery({ queryKey: ["tvshow"], queryFn: () => fetchTvShowDetails(id) })
    
    if(isLoading){
        return <div className="">Loading...</div>
    }
    console.log(data)
    return (
        <div className='container mx-auto p-2'>
            <div className="border py-8">
                <p className='text-2xl md:text-3xl text-center pb-8 font-bold'>{data.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 px-10">
                    <div className="mx-auto mb-4">
                        <img className='h-96 ' src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="" />
                    </div>
                    <div className="col-span-2 space-y-2">
                        <div className="leading-tight">
                            <p className='font-semibold'>Created By:</p>
                            <p className=' flex flex-wrap gap-2'>{data?.created_by.map((genre: { id: number, name: string }, index:number) => (
                                <span key={index} className='text-nowrap bg-indigo-700 text-white text-sm px-3 py-[0.1rem] me-2 rounded-md'>{genre.name}</span>
                            ))}</p>
                        </div>
                        <div className="leading-tight">
                            <p className='font-semibold'>Budget</p>
                            <p className='text-slate-700'>$ {data.budget}</p>
                        </div>
                        <div className="w-full">
                            <p className='font-semibold'>Genre</p>
                            <p className='flex flex-wrap gap-2'>{data?.genres.map((genre: { id: number, name: string }, index:number) => (
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
                        <div className="leading-tight">
                            <p className='font-semibold'>Seasons: {data.seasons.length}</p>
                            
                            <div className="border h-32 overflow-y-scroll">
                                {
                                    data.seasons.map((season:any, index:number)=>(
                                        <div className="" key={index}>
                                            <div className="border p-1 bg-slate-300 text-gray-800" onClick={()=>toggleAccordian(index)}>{season.name}</div>
                                            {
                                                activeIndex===index && (
                                                    <div className="bg-slate-200 text-sm p-1">
                                                        <p>Total Episode: {season.episode_count}</p>
                                                        <p className=' text-slate-700'>{season.overview}</p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                                
                            </div>
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
    return <>Test</>
}

export default TvShow