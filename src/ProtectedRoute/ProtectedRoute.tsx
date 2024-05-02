import React from "react"
import { Navigate } from "react-router-dom"

type Props ={
    children:React.ReactNode
}
const ProtectedRoute = ({children}:Props) => {
    if(!localStorage.getItem("guest_session_id")){
        return <Navigate to={"/auth"} />
    }
  return (
    <>{children}</>
  )
}

export default ProtectedRoute