import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Auth from "./pages/Auth"
import Movie from "./pages/Movie"
import TvShow from "./pages/TvShow"
import Rated from "./pages/Rated"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>}/>
        <Route path="/auth" element={<Layout><Auth /></Layout>}/>
        <Route path="/movie/:id" element={<ProtectedRoute><Layout><Movie /></Layout></ProtectedRoute>}/>
        <Route path="/tvshow/:id" element={<ProtectedRoute><Layout><TvShow /></Layout></ProtectedRoute>}/>
        <Route path="/rated" element={<ProtectedRoute><Layout><Rated /></Layout></ProtectedRoute>}/>
      </Routes>
    </>
  )
}

export default App