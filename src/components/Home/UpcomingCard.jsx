import { Link } from "react-router-dom";

const UpcomingCard = ({ upcoming }) => {
    const { id, marathon_image, title, location, description, start_registration_date, end_registration_date, marathon_start_date } = upcoming;

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
                <img className="overflow-hidden object-cover border" src={marathon_image} alt={title} />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Registration-Start:</strong> {start_registration_date}</p>
                    <p><strong>Registration-End:</strong> {end_registration_date}</p>
                    <p><strong>Marathon-Start:</strong> {marathon_start_date}</p>
                    <div className="card-actions">
                        <Link to={`/upcoming/${id}`} state={{ marathon_image, title, description, location, start_registration_date, end_registration_date, marathon_start_date }}>
                            <button className="btn bg-purple-600 text-white">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;
