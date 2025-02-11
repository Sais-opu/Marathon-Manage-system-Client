import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/authProvider";
import Swal from "sweetalert2";

const Registration = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [apply, setApply] = useState({
        Title: "",
        MarathonStartDate: "",
    });

    useEffect(() => {
        fetch(`https://marathon-manage-system-server.vercel.app/marathon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setApply({
                    Title: data.Title || "",
                    MarathonStartDate: data.MarathonStartDate || "",
                });
            })
            .catch((err) => console.error("Failed to fetch marathon:", err));
    }, [id]);

    const submitApply = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const listApply = Object.fromEntries(formData.entries());
        listApply.apply_id = id;

        fetch('https://marathon-manage-system-server.vercel.app/apply-applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listApply),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: 'success',
                    title: 'Registration successful',
                    text: 'You have been registered successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch(() => {
            Swal.fire({
                position: "top-end",
                icon: 'error',
                title: 'Error',
                text: 'There was an error. Please try again later.',
                showConfirmButton: false,
                timer: 1500,
            });
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-purple-700 via-pink-400 to-indigo-800 px-4">
            <div className="bg-purple-600 text-white md:w-2/3 w-full p-10 rounded-lg shadow-lg">
                <h2 className="text-center font-extrabold text-4xl mb-8">Marathon Registration</h2>
                <form onSubmit={submitApply} className="space-y-6">
                    <input type="hidden" name="apply_id" value={id} />
                    <div>
                        <label className="block text-lg font-medium">Email</label>
                        <input type="text" name="email" value={user.email || ""} readOnly className="mt-2 p-3 w-full border rounded-md text-black bg-gray-200" required />
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Marathon Title</label>
                        <input type="text" name="Title" value={apply.Title || ""} readOnly className="mt-2 p-3 w-full border rounded-md text-black bg-gray-200" required />
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Marathon Date</label>
                        <input type="text" name="MarathonStartDate" value={apply.MarathonStartDate || ""} readOnly className="mt-2 p-3 w-full border rounded-md text-black bg-gray-200" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium">First Name</label>
                            <input type="text" name="firstname" placeholder="First Name" className="mt-2 p-3 w-full border rounded-md text-black" required />
                        </div>
                        <div>
                            <label className="block text-lg font-medium">Last Name</label>
                            <input type="text" name="lastname" placeholder="Last Name" className="mt-2 p-3 w-full border rounded-md text-black" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Contact Info</label>
                        <input type="text" name="contactInfo" placeholder="Phone Number" className="mt-2 p-3 w-full border rounded-md text-black" required />
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Additional Info</label>
                        <textarea name="addinfo" placeholder="Any additional information" className="mt-2 p-3 w-full border rounded-md text-black" required />
                    </div>
                    <div>
                        <button className="w-full bg-white text-purple-800 font-bold py-3 px-6 rounded-md hover:bg-purple-600 hover:text-white transition duration-300 text-lg">
                            Submit Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
