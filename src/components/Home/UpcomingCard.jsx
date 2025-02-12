import { Link } from "react-router-dom";

const UpcomingCard = ({ upcoming }) => {
    const { id, marathon_image, title, location, description, start_registration_date, end_registration_date, marathon_start_date } = upcoming;

    return (
        <div className="card bg-gradient-to-r from-indigo-800 to-purple-600 shadow-xl border p-4 w-full h-full">
            <img className="overflow-hidden object-cover border rounded-lg h-48 w-full" src={marathon_image} alt={title} />
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-white">{title}</h2>
                <p className="text-white"><strong>Location:</strong> {location}</p>
                <p className="text-white"><strong>Description:</strong> {description}</p>
                <p className="text-white"><strong>Registration Start:</strong> {new Date(start_registration_date).toLocaleDateString()}</p>
                <p className="text-white"><strong>Registration End:</strong> {new Date(end_registration_date).toLocaleDateString()}</p>
                <p className="text-white"><strong>Marathon Start:</strong> {new Date(marathon_start_date).toLocaleDateString()}</p>
                <div className="card-actions">
                    <Link to={`/upcoming/${id}`} state={{ marathon_image, title, description, location, start_registration_date, end_registration_date, marathon_start_date }}>
                        <button className="btn bg-purple-600 text-white mt-4">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;
