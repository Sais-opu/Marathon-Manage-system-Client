


import { NavLink } from "react-router-dom";


const Navbar = () => {

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
                <NavLink to="/dasboard"
                    className={({ isActive }) =>
                        isActive ? "bg-purple-600 text-white px-4 py-2 rounded" : ""
                    } >
                    Dashboard
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
            
        </>
    );

    return (

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
                    className="btn btn-ghost normal-case md:text-xl font-bold"
                >
                    Marathon Manage System
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end gap-4 flex items-center">


                <div className="flex gap-4">
                    <NavLink to="/register" className="btn btn-outline btn-success">
                        Sign Up
                    </NavLink>
                    <NavLink to="/login" className="btn btn-outline btn-success">
                        Log In
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;