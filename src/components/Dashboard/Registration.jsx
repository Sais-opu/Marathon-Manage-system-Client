import { useParams } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/authProvider";


const Registration = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [apply, setApply] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/marathon/${id}`)
            .then((res) => res.json())
            .then((data) => setApply(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, []);
    const submitApply = e => {
        const form = e.target;
        const firstname = form.firstname.value
        const lastname = form.lastname.value
        const contactInfo = form.contactInfo.value
        const addinfo = form.addinfo.value
        // apply info
        const listApply = {
            apply_id: id,
            apply_email: user.email,
            firstname, lastname, contactInfo, addinfo
        }
        fetch('http://localhost:5000/apply-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(listApply)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h1>{apply.Title}</h1>
            <h1>{user.email}</h1>
            <div className="card bg-base-100 w-full shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Registration Form,</h1>
                <form onSubmit={submitApply} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={user.email} readOnly type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="firstname" placeholder="First-name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lastname" placeholder="Last-name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Info</span>
                        </label>
                        <input type="text" name="contactInfo" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-">
                        <label className="label">
                            <span className="label-text">Additional Info</span>
                        </label>
                        <input type="text" name="addinfo" placeholder="" className="input input-bordered " required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Registration;