import { useQuery } from '@tanstack/react-query'

import {  mutationLogin } from '../api/mutationLogin'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    // const {data,mutate, isSuccess} = useMutation({mutationKey:["login"],mutationFn:mutationLogin})
    const {data} = useQuery({queryKey:["login"],queryFn:mutationLogin})
    const navigate= useNavigate()
    const handleLogin= async()=>{
        
        // console.log(data)
        localStorage.setItem("guest_session_id",data.guest_session_id)
        navigate("/")
    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <div className="w-72 space-y-2">
        <p className='text-lg tracking-tight text-center font-semibold text-indigo-800'>Welcome! Login by registering as Guest below</p>
        <button onClick={handleLogin} className='bg-indigo-800 text-white w-full py-1 rounded-lg hover:bg-indigo-600'>Login</button>
        </div>
    </div>
  )
}

export default Auth