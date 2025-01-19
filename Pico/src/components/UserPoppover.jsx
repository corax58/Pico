import React from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const UserPoppover = (guest) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated)
    return (
      <div>
        <LoginButton />
      </div>
    );
  return (
    <div className="dropdown dropdown-end">
      <div className="avatar" tabIndex={0} role="button">
        <div className="w-10 rounded-full">
          <img src={user.picture} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-min  shadow"
      >
        <li>
          <a className="">
            <div className="w-10 rounded-full">
              <img src={user.picture} className=" rounded-full" />
            </div>
            <div>
              <p className=" font-medium">{user.name}</p>
              <p className=" font-light text-sm">{user.email}</p>
            </div>
          </a>
        </li>
        <div className="divider m-0"></div>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default UserPoppover;
