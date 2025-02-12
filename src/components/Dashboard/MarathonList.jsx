import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import Modal from "react-modal"; // Import the modal library
import Swal from "sweetalert2"; // For success/error notifications
import SideBar from "../Sidebar/SideBar";

// Modal styles (customize as needed)
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "600px",
        padding: "20px",
        borderRadius: "15px",
        background: "linear-gradient(to bottom, rgba(92, 80, 255, 0.6), rgba(234, 82, 255, 0.6))",
    },
};

const MarathonList = () => {
    const [list, setList] = useState([]);
    const [selectedMarathon, setSelectedMarathon] = useState(null);
    const [deleteMarathonId, setDeleteMarathonId] = useState(null);
    const [isAddUpdateModalOpen, setIsAddUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Fetch marathons
    useEffect(() => {
        fetch("https://marathon-manage-system-server.vercel.app/marathon")
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, []);

    // Handle Add/Update Modal Open
    const openAddUpdateModal = (marathon = null) => {
        setSelectedMarathon(marathon);
        setIsAddUpdateModalOpen(true);
    };

    // Handle Add/Update Modal Close
    const closeAddUpdateModal = () => {
        setIsAddUpdateModalOpen(false);
        setSelectedMarathon(null);
    };

    // Handle Delete Modal Open
    const openDeleteModal = (id) => {
        setDeleteMarathonId(id);
        setIsDeleteModalOpen(true);
    };

    // Handle Delete Modal Close
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteMarathonId(null);
    };

    // Handle Add/Update Operation
    const handleAddUpdateMarathon = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const marathonData = Object.fromEntries(formData.entries());

        const url = selectedMarathon
            ? `https://marathon-manage-system-server.vercel.app/marathon/${selectedMarathon._id}/update`
            : "https://marathon-manage-system-server.vercel.app/marathon";

        const method = selectedMarathon ? "PUT" : "POST";

        fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(marathonData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId || data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: selectedMarathon ? "Marathon Updated!" : "Marathon Added!",
                        text: selectedMarathon
                            ? "Your marathon has been updated successfully."
                            : "Your marathon has been added successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    // Refresh the list
                    fetch("https://marathon-manage-system-server.vercel.app/marathon")
                        .then((res) => res.json())
                        .then((data) => setList(data))
                        .catch((err) => console.error("Failed to fetch marathons:", err));

                    closeAddUpdateModal();
                }
            })
            .catch((err) => {
                console.error("Failed to add/update marathon:", err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
                });
            });
    };

    // Handle Delete Operation
    const handleDelete = () => {
        fetch(`https://marathon-manage-system-server.vercel.app/marathon/${deleteMarathonId}/delete`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                setList(list.filter((item) => item._id !== deleteMarathonId));
                toast.success("Marathon deleted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
                closeDeleteModal();
            })
            .catch((err) => {
                console.error("Failed to delete marathon:", err);
                toast.error("Failed to delete marathon. Please try again.", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    return (
        <div className="flex min-h-screen ">
            <div className="mb-6 w-full max-w-7xl mx-auto">
                <div className="overflow-x-auto shadow-lg bg-gradient-to-b my-4 from-purple-700 via-pink-400 to-indigo-800">
                <h2 className="text-2xl font-bold mb-4 text-white">Total Marathon Count: {list.length}</h2>
                    <table className="table w-full table-auto from-purple-700 to-indigo-800 rounded-md shadow-md">
                    
                        <thead>
                            <tr>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">#</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Registration Deadline</th>
                                <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={item._id} className="hover:bg-purple-900 border-white">
                                    <th className="p-3 text-sm font-medium text-white">{index + 1}</th>
                                    <td className="p-3 text-sm text-white">{item.Title}</td>
                                    <td className="p-3 text-sm text-white">{item.EndRegistrationDate || "N/A"}</td>
                                    <td className="p-3 text-sm">
                                        <button
                                            onClick={() => openAddUpdateModal(item)}
                                            className="btn bg-purple-600 text-white px-4 py-2 rounded-md mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => openDeleteModal(item._id)}
                                            className="btn bg-blue-800 text-white px-4 py-2 rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Add/Update Modal */}
                <Modal
                    isOpen={isAddUpdateModalOpen}
                    onRequestClose={closeAddUpdateModal}
                    style={customStyles}
                    contentLabel="Add/Update Marathon Modal"
                >
                    <h2 className="text-xl font-bold mb-4 text-center text-white">
                        {selectedMarathon ? "Update Marathon" : "Add New Marathon"}
                    </h2>
                    <form onSubmit={handleAddUpdateMarathon} className="space-y-4">
                        <div>
                            <label htmlFor="Title" className="block text-sm font-medium text-gray-700">
                                Marathon Title
                            </label>
                            <input
                                type="text"
                                id="Title"
                                name="Title"
                                defaultValue={selectedMarathon?.Title || ""}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="StartRegistrationDate" className="block text-sm font-medium text-gray-700">
                                Start Registration Date
                            </label>
                            <input
                                type="date"
                                id="StartRegistrationDate"
                                name="StartRegistrationDate"
                                defaultValue={selectedMarathon?.StartRegistrationDate || ""}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="EndRegistrationDate" className="block text-sm font-medium text-gray-700">
                                End Registration Date
                            </label>
                            <input
                                type="date"
                                id="EndRegistrationDate"
                                name="EndRegistrationDate"
                                defaultValue={selectedMarathon?.EndRegistrationDate || ""}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="MarathonStartDate" className="block text-sm font-medium text-gray-700">
                                Marathon Start Date
                            </label>
                            <input
                                type="date"
                                id="MarathonStartDate"
                                name="MarathonStartDate"
                                defaultValue={selectedMarathon?.MarathonStartDate || ""}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="Location" className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                id="Location"
                                name="Location"
                                defaultValue={selectedMarathon?.Location || ""}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="RunningDistance" className="block text-sm font-medium text-gray-700">
                                Running Distance
                            </label>
                            <select
                                id="RunningDistance"
                                name="RunningDistance"
                                defaultValue={selectedMarathon?.RunningDistance || "25K"}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            >
                                <option value="25K">25K</option>
                                <option value="3K">3K</option>
                                <option value="10K">10K</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ImageUrl" className="block text-sm font-medium text-gray-700">
                                Image URL
                            </label>
                            <input
                                type="url"
                                id="ImageUrl"
                                name="ImageUrl"
                                defaultValue={selectedMarathon?.ImageUrl || ""}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn bg-purple-600 text-white mt-4 w-full py-2 rounded-md"
                        >
                            {selectedMarathon ? "Update Marathon" : "Add Marathon"}
                        </button>
                    </form>
                </Modal>

                {/* Delete Modal */}
                <Modal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={closeDeleteModal}
                    style={customStyles}
                    contentLabel="Delete Marathon"
                >
                    <h2 className="text-xl font-bold mb-4 text-center text-white">Are you sure you want to delete this marathon?</h2>
                    <div className="flex justify-around">
                        <button
                            onClick={handleDelete}
                            className="btn bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            Yes, Delete
                        </button>
                        <button
                            onClick={closeDeleteModal}
                            className="btn bg-gray-400 text-white px-4 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default MarathonList;
