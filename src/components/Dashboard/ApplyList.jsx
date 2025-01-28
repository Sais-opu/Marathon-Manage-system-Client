
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/authProvider";
import { Bounce, toast } from "react-toastify";


const ApplyList = () => {
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://marathon-manage-system-server.vercel.app/job-applylist?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((err) => console.error("Failed to fetch applications:", err));
    }, [user.email]);

    // Handle Delete
    const handleDelete = (id) => {
        fetch(`https://marathon-manage-system-server.vercel.app/apply-application/${id}/delete`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                setList(list.filter((item) => item._id !== id));
                toast.success("Application deleted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((err) => console.error("Failed to delete application:", err));
    };

    // Handle Update
    const handleUpdate = (id) => {
        const updatedStatus = prompt("Enter new status for this application:");
        if (updatedStatus) {
            fetch(`https://marathon-manage-system-server.vercel.app/apply-application/${id}/update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: updatedStatus }),
            })
                .then((res) => res.json())
                .then(() => {
                    setList(list.map((item) =>
                        item._id === id ? { ...item, status: updatedStatus } : item
                    ));
                    toast.success("updated successfully!", {
                        position: "top-center",
                        autoClose: 3000,
                        transition: Bounce,
                    });
                })
                .catch((err) => console.error("Failed to update application:", err));
        }
    };

    return (
        <div>
            <h2>My Apply List: {list.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Start Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.Title}</td>
                                <td>{item.MarathonStartDate}</td>
                                <td>{item.status || "Pending"}</td>
                                <td>
                                    <button onClick={() => handleUpdate(item._id)} className="btn btn-sm btn-primary">Update</button>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-error ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplyList;

