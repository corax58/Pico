import { Link } from "react-router-dom"
const TabBar = () => {
  return (
    <div className='flex shadow-sm text-xl h-10 '>
      <Link to={"/"} className="flex w-full justify-center hover:bg-slate-200 transition-all hover:scale-105 hover:shadow-lg">
FYP
      </Link>
      <Link to={"/myalbums"} className="flex w-full justify-center hover:bg-slate-200 transition-all hover:scale-105 hover:shadow-lg">
My Albums
      </Link>
      
    </div>
  )
}

export default TabBar