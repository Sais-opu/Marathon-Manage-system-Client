import { Link } from "react-router-dom";

const MarathonsCard = ({ marathon }) => {
    const { _id, MarathonImage, Title, Location, StartRegistrationDate, EndRegistrationDate } = marathon;

    return (
        <div className="card bg-gradient-to-r from-indigo-800 to-purple-600 shadow-xl border p-4 w-full h-full">
            <img
                className="overflow-hidden object-cover border rounded-lg h-48 w-full"
                src={MarathonImage}
                alt={`Image of ${Title}`}
            />
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-white">{Title}</h2>
                <p className="text-white"><strong>Location:</strong> {Location}</p>
                <p className="text-white"><strong>Registration Start:</strong> {new Date(StartRegistrationDate).toLocaleDateString()}</p>
                <p className="text-white"><strong>Registration End:</strong> {new Date(EndRegistrationDate).toLocaleDateString()}</p>
                <div className="card-actions">
                    <Link to={`/marathon/${_id}`}>
                        <button className="btn bg-purple-600 text-white mt-4">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonsCard;
