
import { useEffect, useState } from "react";

const MarathonList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("https://marathon-manage-system-server.vercel.app/marathon")
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, []);

    // Handle Delete
    const handleDelete = (id) => {
        fetch(`https://marathon-manage-system-server.vercel.app/marathon/${id}/delete`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => setList(list.filter((item) => item._id !== id)))
            .catch((err) => console.error("Failed to delete marathon:", err));
    };

    // Handle Update
    const handleUpdate = (id) => {
        const updatedTitle = prompt("Enter new title for this marathon:");
        if (updatedTitle) {
            fetch(`https://marathon-manage-system-server.vercel.app/marathon/${id}/update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Title: updatedTitle }),
            })
                .then((res) => res.json())
                .then(() => {
                    setList(list.map((item) =>
                        item._id === id ? { ...item, Title: updatedTitle } : item
                    ));
                })
                .catch((err) => console.error("Failed to update marathon:", err));
        }
    };

    return (
        <div>
            <h2>Marathon List: {list.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Registration Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.Title}</td>
                                <td>{item.RegistrationDeadline}</td>
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

export default MarathonList;
