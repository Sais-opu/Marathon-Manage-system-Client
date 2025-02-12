import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/authProvider";
import { Bounce, toast } from "react-toastify";
import Modal from "react-modal"; // Import a modal library (install if not already installed)
import SideBar from "../Sidebar/SideBar";

// Modal styles (optional, customize as needed)
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: "600px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#6B46C1", // Adjusted to match the theme (purple)
        color: "white", // White text for contrast
    },
};

const ApplyList = () => {
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null); // For update modal
    const [deleteApplicationId, setDeleteApplicationId] = useState(null); // For delete confirmation modal
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // Update modal state
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Delete modal state

    // Fetch applications
    useEffect(() => {
        fetch(`https://marathon-manage-system-server.vercel.app/job-applylist?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setList(data);
            })
            .catch((err) => console.error("Failed to fetch applications:", err));
    }, [user?.email]);

    // Handle Update Modal Open
    const openUpdateModal = (application) => {
        setSelectedApplication(application);
        setIsUpdateModalOpen(true);
    };

    // Handle Update Modal Close
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedApplication(null);
    };

    // Handle Delete Modal Open
    const openDeleteModal = (id) => {
        setDeleteApplicationId(id);
        setIsDeleteModalOpen(true);
    };

    // Handle Delete Modal Close
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteApplicationId(null);
    };

    // Handle Update Operation
    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedStatus = e.target.status.value;

        fetch(`https://marathon-manage-system-server.vercel.app/apply-application/${selectedApplication._id}/update`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: updatedStatus }),
        })
            .then((res) => res.json())
            .then(() => {
                setList(list.map((item) =>
                    item._id === selectedApplication._id ? { ...item, status: updatedStatus } : item
                ));
                toast.success("Application updated successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
                closeUpdateModal();
            })
            .catch((err) => {
                toast.error("Failed to update application. Please try again.", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    // Handle Delete Operation
    const handleDelete = () => {
        fetch(`https://marathon-manage-system-server.vercel.app/apply-application/${deleteApplicationId}/delete`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                setList(list.filter((item) => item._id !== deleteApplicationId));
                toast.success("Application deleted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
                closeDeleteModal();
            })
            .catch((err) => {
                toast.error("Failed to delete application. Please try again.", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    return (
        <div className="flex sm:-gap-2 justify-center items-center min-h-screen  lg:mx-4 overflow-x-hidden">
            <div className="bg-purple-600 text-white w-full max-w-4xl mb-4 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">My Apply List: {list.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
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
                                <tr key={item._id} className="hover:bg-indigo-400 border-white">
                                    <th>{index + 1}</th>
                                    <td>{item.Title}</td>
                                    <td>{item.MarathonStartDate}</td>
                                    <td>{item.status || "Pending"}</td>
                                    <td className="flex flex-wrap  justify-center">
                                        <button
                                            onClick={() => openUpdateModal(item)}
                                            className="btn btn-sm btn-primary w-full sm:w-auto"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => openDeleteModal(item._id)}
                                            className="btn btn-sm btn-error  w-full sm:w-auto"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Update Modal */}
                <Modal
                    isOpen={isUpdateModalOpen}
                    onRequestClose={closeUpdateModal}
                    style={customStyles}
                    contentLabel="Update Application Modal"
                >
                    <h2 className="text-xl font-bold mb-4">Update Application</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select
                                name="status"
                                defaultValue={selectedApplication?.status || "Pending"} // Default to "Pending"
                                className="select select-bordered"
                                required
                            >
                                <option value="Pending">Pending</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Selected">Selected</option>
                            </select>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button type="button" onClick={closeUpdateModal} className="btn btn-ghost mr-2">
                                Cancel
                            </button>
                            <button type="submit" className="btn bg-purple-600 text-white">
                                Update
                            </button>
                        </div>
                    </form>
                </Modal>

                {/* Delete Confirmation Modal */}
                <Modal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={closeDeleteModal}
                    style={customStyles}
                    contentLabel="Delete Application Modal"
                >
                    <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                    <p>Are you sure you want to delete this application?</p>
                    <div className="mt-4 flex justify-end">
                        <button type="button" onClick={closeDeleteModal} className="btn btn-ghost mr-2">
                            Cancel
                        </button>
                        <button type="button" onClick={handleDelete} className="btn btn-error">
                            Delete
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ApplyList;
