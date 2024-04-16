// import logo from '../assets/images/logo.png'
import logo from '../assets/Images/logo.png'
import { BiSolidUser } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="h-16 w-full flex pt-2 p-5 shadow-sm">
<div>
    <img className="   h-max  w-32" src={logo}/>

</div>
<form className='w-full  flex justify-center'>
<input type="text" className=' h-10 w-96 rounded-full pl-3 mr-1 bg-slate-200' placeholder='Search'/>  
</form>
<div className='bg-slate-300  overflow-clip size-12 w-12 p-3 rounded-full flex justify-center items-center'>
<BiSolidUser size={28}/>

</div>

    </div>
  )
}

export default NavBar