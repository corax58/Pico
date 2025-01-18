// import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { BiSolidUser } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className=" fixed  h-16 z-20 bg-white w-full flex items-center pt-2 p-2 md:p-5 shadow-sm ">
      <div>
        <Link to={"/"}>
          <img className="   h-max  w-32" src={logo} />
        </Link>
      </div>
      <form className="w-full  flex justify-center">
        <input
          type="text"
          className=" h-10 w-full sm:w-1/2 rounded-full pl-3 mx-4 bg-slate-200"
          placeholder="Search"
        />
      </form>
      <div className="size-12 flex items-center rounded-badge overflow-hidden">
        <img
          src="https://wallpapers.com/images/hd/random-pfp-with-sunglasses-and-hearts-9cjm5zicnjcogsa2.jpg"
          className="rounded-badge"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
