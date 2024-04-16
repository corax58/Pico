import { Link } from "react-router-dom"
const TabBar = () => {
  return (
    <div className='flex shadow-sm text-xl h-10 '>
      <Link to={"/"} className="flex w-full justify-center hover:bg-slate-100">
FYP
      </Link>
      <Link to={"/myalbums"} className="flex w-full justify-center hover:bg-slate-100 ">
My Albums
      </Link>
      
    </div>
  )
}

export default TabBar