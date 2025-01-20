import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="  items-center w-full h-full flex gap-2"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <LogOut />

      <p className=" font-bold">Log Out</p>
    </button>
  );
};

export default LogoutButton;
