import { useLocation } from "react-router-dom";

const UpcomingDetails = () => {
    const location = useLocation();

    const { marathon_image, title, description, location: loc, start_registration_date, end_registration_date, marathon_start_date } = location.state;

    return (
        <div>
            {/* Marathon Details */}
            <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
                <img className="overflow-hidden object-cover border" src={marathon_image} alt={title} />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p><strong>Location:</strong> {loc}</p>
                    <p><strong>Registration-Start:</strong> {start_registration_date}</p>
                    <p><strong>Registration-End:</strong> {end_registration_date}</p>
                    <p><strong>Marathon-Start:</strong> {marathon_start_date}</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingDetails;
