import { Link } from 'react-router-dom'
import { DisplayType } from '../pages/Home'

interface Props {
    id: string;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    displayType:DisplayType
}

const Card = ({displayType,title,release_date,name, overview, poster_path, id}:Props) => {
    return (

                <Link to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${id}`} className="" >
                    <img className="w-full h-[60%] object-fill " src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={name} />
                    <div className="p-1 space-y-1">
                        <p className="font-semibold line-clamp-1" title={title}>{title}</p>
                        <p className="text-gray-600 text-sm">Release Date: {release_date}</p>
                        <p className="line-clamp-4 text-sm tracking-tight text-gray-800">{overview}</p>
                    </div>
                </Link>

    )
}

export default Card