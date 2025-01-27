import { useParams } from "react-router-dom";


const Registration = () => {
    const { id } = useParams();
    const submitApply = e => {
        const form = e.target;
        const firstname = form.firstname.value
        const lastname = form.lastname.value
        const contactInfo = form.contactInfo.value
        const addinfo = form.addinfo.value
        console.log(firstname, lastname, contactInfo, addinfo)
    }

    return (
        <div>

            <div className="card bg-base-100 w-full shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Registration Form,</h1>
                <form onSubmit={submitApply} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                        <input type="number" name="contactInfo" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-">
                        <label className="label">
                            <span className="label-text">Additional Info</span>
                        </label>
                        <input type="text" name="addinfo" placeholder="" className="input input-bordered py-10" required />
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