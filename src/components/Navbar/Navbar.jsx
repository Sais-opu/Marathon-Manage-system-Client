


import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";

import logo from '../../assets/logo.jpg'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogout = async () => {
        try {
            await signOutUser();
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Logout error:", error.message);
            alert("Failed to log out. Please try again.");
        }
    };

    const links = (
        <>
            <li>
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive ? "bg-purple-600 text-white px-4 py-2 rounded" : ""
                    } >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/marathon"
                    className={({ isActive }) =>
                        isActive ? "bg-purple-600 text-white px-4 py-2 rounded" : ""
                    } >
                    Marathons
                </NavLink>
            </li>
            {user && user.displayName && (
                <li>
                    <NavLink to="/dasboard"
                        className={({ isActive }) =>
                            isActive ? "bg-purple-600 text-white px-4 py-2 rounded" : ""
                        } >
                        Dashboard
                    </NavLink>
                </li>
            )}

            

        </>
    );

    return (

        <div>
            {user && user.displayName && (
                <div className="bg-purple-400 text-center py-2">
                    <span className="text-sm font-medium">
                        Welcome, {user.displayName}!
                    </span>
                </div>
            )}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
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
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>

                    <NavLink
                        to="/"
                        className="btn btn-ghost normal-case md:text-xl font-bold flex"
                    >
                        
                            <img className="w-10" src={logo} alt="logo" />
                            <p>Marathon Manage</p>
                        
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end gap-4 flex items-center">
                    {user && user.photoURL && (
                        <div className="relative group">
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-75 py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                {user.displayName}
                            </div>
                        </div>
                    )}
                    {user && user.displayName ? (
                        <div className="flex items-center gap-4">
                            <button
                                className="btn bg-purple-600 text-white"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <NavLink to="/register" className="btn bg-purple-600 text-white">
                                Sign Up
                            </NavLink>
                            <NavLink to="/login" className="btn bg-purple-600 text-white">
                                Log In
                            </NavLink>
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;