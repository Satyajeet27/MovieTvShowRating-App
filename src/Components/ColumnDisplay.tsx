import { DisplayType } from "../pages/Home";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "../api/query";
import { useState } from "react";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Card from "./Card";

interface DisplayData {
    id: string;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    rating?:number
}

interface Props {
    data: DisplayData[];
    displayType: DisplayType;
    isRated?:boolean
}

const ColumnDisplay = ({ data, displayType, isRated }: Props) => {
    // const title= displayType=== DisplayType.Movies ? data[0].title : data[0].name
    const [rating, setRating] = useState<number>(0)

    
    const onSuccess = () => {
        // console.log(isSuccess)
        if(status==="success"){
            
        }
        if(error){
            toast.error("Something went wrong!")
            return
        }
        toast.success("Successfully rated!")
        
    }
    const onError = () => {
        toast.error("Something went wrong!")
    }
    // console.log(isRated)
    const { mutate: rateMovieMutation , error,status, } = useMutation({ mutationKey: ["rateMovie"], mutationFn: (id: number) => rateMovie(id, rating), onError, onSuccess })

    const { mutate: rateTvShowMutation } = useMutation({ mutationKey: ["rateTvShow"], mutationFn: (id: number) => rateTvShow(id, rating), onError, onSuccess })
    
    const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation
    
    return (
        <div className="container mx-auto ">

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* <div className="flex justify-end flex-wrap gap-4"> */}
                {
                    data && data.map((displayData, index) => {
                        displayData.title = displayType === DisplayType.Movies ? displayData.title : displayData.name
                        displayData.release_date = displayType === DisplayType.Movies ? displayData.release_date : displayData.first_air_date
                        return (
                            // <div className="w-80 border rounded-md mx-auto " key={index}>
                            //     <Link to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${displayData.id}`} className="" key={index}>
                            //         <img className="w-full h-2/3 object-fill " src={`https://image.tmdb.org/t/p/w500/${displayData.poster_path}`} alt={displayData.name} />
                            //         <div className="p-1 space-y-1">
                            //             <p className="font-semibold">{displayData.title}</p>
                            //             <p className="text-gray-600 text-sm">Release Date: {displayData.release_date}</p>
                            //             <p className="line-clamp-4 text-sm tracking-tight text-gray-800">{displayData.overview}</p>

                            //         </div>
                            //     </Link>
                            //     <form action="" className="" >
                            //         <input className="border border-blue-800 focus:outline-none" type="number" min="0" max="10" step="0.5" onChange={e => setRating(Number(e.target.value))} />
                            //         <button type="button" onClick={() => rate(Number(displayData.id))} className="h-full bg-blue-800 text-white py-[0.08rem] px-2 mb-2">Rate</button>
                            //     </form>
                            // </div>
                            <div className="w-80 h-[500px] relative border rounded-md mx-auto " key={index}>
                                <Card {...displayData} displayType={displayType} />
                                {
                                    isRated ? <div className="text-sm bg-green-700/80 text-white px-2 py-1 absolute bottom-1 left-1/2 -translate-x-1/2">Your Rating: {displayData.rating}</div>:
                                    <form  className="flex absolute bottom-1 left-1/2 -translate-x-1/2 h-10 p-1" >
                                    <input className="border ps-1 h-full focus:outline-none" type="number" min="0" max="10" step="0.5" onChange={e => setRating(Number(e.target.value))} />
                                    <button type="button" onClick={() => rate(Number(displayData.id))}  className=" bg-blue-800 h-full text-white px-6 ">Rate</button>
                                </form>
                                }
                               
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ColumnDisplay