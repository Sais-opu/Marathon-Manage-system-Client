import { Navigate, useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/authProvider";
import Swal from "sweetalert2";


const Registration = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [apply, setApply] = useState([]);

    useEffect(() => {
        fetch(`https://marathon-manage-system-server.vercel.app/marathon/${id}`)
            .then((res) => res.json())
            .then((data) => setApply(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, []);
    const submitApply = e => {
        
        const form = e.target;
        const email = form.email.value
        const MarathonStartDate = form.MarathonStartDate.value
        const Title = form.Title.value
        const firstname = form.firstname.value
        const lastname = form.lastname.value
        const contactInfo = form.contactInfo.value
        const addinfo = form.addinfo.value
        

        // apply info
        const listApply = {
            apply_id: id,
            email,Title,MarathonStartDate,firstname, lastname, contactInfo, addinfo
        }
        fetch('https://marathon-manage-system-server.vercel.app/apply-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(listApply)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position:"top-end",
                        icon: 'success',
                        title: 'Registration succesfull',
                        text: 'Your Registration has been added successfully.',
                        showComfirmButton:false,
                        timer:1500
                    });
                    
                }
            })
    }

    return (
        <div>
            <div className="md:px-32">
                <h2 className="font-extrabold text-4xl my-6">Registration</h2>
                <form onSubmit={submitApply} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user.email} readOnly
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="Title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="Title"
                            name="Title"
                            value={apply.Title} readOnly
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="MarathonStartDate" className="block text-sm font-medium text-gray-700">
                            Marathon Date-month/date/year
                        </label>
                        <input
                            type="text"
                            id="MarathonStartDate"
                            name="MarathonStartDate"
                            value={apply.MarathonStartDate} readOnly
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstname"
                            placeholder="First Name"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastname"
                            placeholder="Last Name"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">
                            Contact Info
                        </label>
                        <input
                            type="text"
                            id="contactInfo"
                            name="contactInfo"
                            placeholder="Contact Info"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="additinInfo" className="block text-sm font-medium text-gray-700">
                            Additional Info
                        </label>
                        <input
                            type="text"
                            id="additinInfo"
                            name="addinfo"
                            placeholder="Additional Info"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <button className="w-full bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-900 transition duration-300">
                            Submission
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Registration;