import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();

    const { _id, MarathonImage, Title, Description, Location, StartRegistrationDate, EndRegistrationDate } = location.state;

    return (
        <div>
            {/* Marathon Details */}
            <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
                <img className="overflow-hidden object-cover border" src={MarathonImage} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p>{Description}</p>
                    <p><strong>Location:</strong> {Location}</p>
                    <p><strong>Registration-Start:</strong> {StartRegistrationDate}</p>
                    <p><strong>Registration-End:</strong> {EndRegistrationDate}</p>
                    <button className="btn bg-purple-600 text-white">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
