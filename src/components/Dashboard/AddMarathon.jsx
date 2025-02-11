import { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";
import Swal from 'sweetalert2';

const AddMarathon = () => {
    const { user } = useContext(AuthContext);

    const handleAddMarathon = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        fetch('https://marathon-manage-system-server.vercel.app/marathon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialData),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: 'success',
                    title: 'Marathon Added!',
                    text: 'Your Marathon has been added successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-purple-700 via-pink-400 to-indigo-800 px-4">
            <div className="bg-purple-600 text-white md:w-2/3 w-full p-10 rounded-lg shadow-2xl">
                <h2 className="text-center font-extrabold text-4xl mb-8">Add New Marathon</h2>
                <form onSubmit={handleAddMarathon} className="space-y-6">
                    {/* Marathon Title */}
                    <div>
                        <label htmlFor="Title" className="block text-lg font-medium">Marathon Title</label>
                        <input
                            type="text"
                            id="Title"
                            name="Title"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>

                    {/* Registration Dates */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="StartRegistrationDate" className="block text-lg font-medium">Start Registration Date</label>
                            <input
                                type="date"
                                id="StartRegistrationDate"
                                name="StartRegistrationDate"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="EndRegistrationDate" className="block text-lg font-medium">End Registration Date</label>
                            <input
                                type="date"
                                id="EndRegistrationDate"
                                name="EndRegistrationDate"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                    </div>

                    {/* Marathon Start Date */}
                    <div>
                        <label htmlFor="MarathonStartDate" className="block text-lg font-medium">Marathon Start Date</label>
                        <input
                            type="date"
                            id="MarathonStartDate"
                            name="MarathonStartDate"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="Location" className="block text-lg font-medium">Location</label>
                        <input
                            type="text"
                            id="Location"
                            name="Location"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>

                    {/* Running Distance */}
                    <div>
                        <label htmlFor="RunningDistance" className="block text-lg font-medium">Running Distance</label>
                        <select
                            id="RunningDistance"
                            name="RunningDistance"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                            required
                        >
                            <option value="25K">25K</option>
                            <option value="3K">3K</option>
                            <option value="10K">10K</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="Description" className="block text-lg font-medium">Description</label>
                        <textarea
                            id="Description"
                            name="Description"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>

                    {/* Email (Read-Only) */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user?.email || ''}
                            readOnly
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black bg-gray-200"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="MarathonImage" className="block text-lg font-medium">Image URL</label>
                        <input
                            type="text"
                            id="MarathonImage"
                            name="MarathonImage"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button className="w-full bg-white text-purple-800 font-bold py-3 px-6 rounded-md hover:bg-purple-500 hover:text-white transition duration-300 text-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;
