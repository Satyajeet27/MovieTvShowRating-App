
import { Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate= useNavigate()
  const handleLogout= ()=>{ 
    localStorage.clear()
    navigate("/auth")
  }
  return (
    <div className="border-b-2">
        <div className='container mx-auto py-4 px-2 flex justify-between items-center'>
        <div className="flex gap-4 text-gray-500 text-lg font-semibold">  
            <Link className='hover:text-gray-700' to={"/"}>Home</Link>
            <Link className='hover:text-gray-700' to={"/rated"}>Rated</Link>
        </div>
        {
          (!localStorage.getItem("guest_session_id")) ? <Link to={"/auth"}>Auth</Link> : <div className="flex gap-4">
            <span className=' text-indigo-600 px-2'>Welcome Guest!</span>
            <button className='text-red-600' onClick={handleLogout
            }>Logout</button>
          </div>
        }
    </div>
    </div>
  )
}

export default Navbar