import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="  min-h-screen  w-full  bg-slate-100">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
