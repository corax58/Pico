import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div className="h-screen w-screen  bg-slate-100">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Layout