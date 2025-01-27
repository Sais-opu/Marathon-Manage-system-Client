import { Link } from "react-router-dom";

const MarathonsCard = ({ marathon }) => {
    const {_id, MarathonImage, Title, Location, StartRegistrationDate, EndRegistrationDate } = marathon;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
            <img
                className="overflow-hidden object-cover border"
                src={MarathonImage}
                alt={`Image of ${Title}`}
            />
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p><strong>Location:</strong> {Location}</p>
                <p><strong>Registration-Start:</strong> {StartRegistrationDate}</p>
                <p><strong>Registration-End:</strong> {EndRegistrationDate}</p>
                <div className="card-actions">
                    <Link to={`/marathon/${_id}`}>
                        <button className="btn bg-purple-600 text-white">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonsCard;
