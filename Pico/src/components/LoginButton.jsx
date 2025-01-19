import { useAuth0 } from "@auth0/auth0-react";
import { LogIn } from "lucide-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className=" h-min w-min flex px-3 py-2 gap-2 border border-slate-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-all "
    >
      <div className=" hidden md:block">
        <LogIn />
      </div>
      Login
    </button>
  );
};

export default LoginButton;
