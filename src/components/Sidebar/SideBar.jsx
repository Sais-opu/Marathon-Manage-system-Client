import { NavLink } from "react-router-dom";



const SideBar = () => {
    return (
        <div>
            <aside className="w-64 bg-gray-100 border-r h-screen sticky top-0">
                <nav className="menu p-4 flex flex-col gap-4">
                    <NavLink
                        to="/dashboard/addmarathon"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 text-white px-4 py-2 rounded"
                                : "px-4 py-2 rounded hover:bg-gray-200"
                        }
                    >
                        Add Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/marathonlist"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 text-white px-4 py-2 rounded"
                                : "px-4 py-2 rounded hover:bg-gray-200"
                        }
                    >
                        My Marathons List
                    </NavLink>
                    <NavLink
                        to="/dashboard/applylist"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 text-white px-4 py-2 rounded"
                                : "px-4 py-2 rounded hover:bg-gray-200"
                        }
                    >
                        My Apply List
                    </NavLink>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;