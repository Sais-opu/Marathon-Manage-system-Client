import { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";
import Swal from 'sweetalert2';


const AddMarathon = () => {
    const { user } = useContext(AuthContext);

    const handleAddMarahton = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);

        fetch('https://marathon-manage-system-server-gsjks2n58.vercel.app/marathon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialData),
        })
        .then(res => res.json())
        .then(data => {
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
        })
    };

    return (
        <div>
            <div className="md:px-32">
                <h2 className="font-extrabold text-4xl my-6">Add New Marathon</h2>
                <form onSubmit={handleAddMarahton} className="space-y-6">
                    <div>
                        <label htmlFor="Title" className="block text-sm font-medium text-gray-700">
                            Marathon Title
                        </label>
                        <input
                            type="text"
                            id="Title"
                            name="Title"
                            className="mt-1 p-2 w-full border rounded-md"
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
                            className="mt-1 p-2 w-full border rounded-md"
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
                            className="mt-1 p-2 w-full border rounded-md"
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
                            className="mt-1 p-2 w-full border rounded-md"
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
                            className="mt-1 p-2 w-full border rounded-md"
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
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        >
                            <option value="25K">25K</option>
                            <option value="3K">3K</option>
                            <option value="10K">10K</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="Description"
                            name="Description"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user?.email || ''}
                            readOnly
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="MarathonImage" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="MarathonImage"
                            name="MarathonImage"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <button className="w-full bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-900 transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;
