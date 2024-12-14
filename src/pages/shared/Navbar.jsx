import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/myApplications"}>My Applications</NavLink>
      </li>
      <li>
        <NavLink to={"/addJob"}>Post a Job</NavLink>
      </li>
      <li>
        <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-md border-b border-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">CareerHub</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline text-black border-black hover:bg-black hover:text-white"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link
              to={"/register"}
              className="btn text-black hover:bg-gray-300 border-2 border-black"
            >
              Register
            </Link>
            <Link
              to={"/signin"}
              className="btn bg-black hover:bg-gray-800 text-white ml-2"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
