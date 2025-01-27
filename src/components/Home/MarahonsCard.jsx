import { Link } from "react-router-dom";

const MarahonsCard = ({ marathon }) => {
    const { _id, MarathonImage, Title, Location, Description, StartRegistrationDate, EndRegistrationDate } = marathon;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
                <img className="overflow-hidden object-cover border" src={MarathonImage} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p><strong>Location:</strong> {Location}</p>
                    <p><strong>Registration-Start:</strong> {StartRegistrationDate}</p>
                    <p><strong>Registration-End:</strong> {EndRegistrationDate}</p>
                    <div className="card-actions">
                        <Link to={`/marathon/${_id}`} state={{ MarathonImage, Title, Description, Location, StartRegistrationDate, EndRegistrationDate }}>
                            <button className="btn bg-purple-600 text-white">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarahonsCard;
