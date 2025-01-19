import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserPoppover from "./UserPoppover";

const NavBar = () => {
  return (
    <div className=" fixed top-0 h-16 z-20 bg-white w-full flex items-center pt-2 p-2 md:p-5 shadow-sm ">
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
      <UserPoppover />
      {/*       
      <LoginButton />
      <LogoutButton /> */}
    </div>
  );
};

export default NavBar;
