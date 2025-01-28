import { useLocation, Link } from "react-router-dom";

const UpcomingDetails = () => {
    const location = useLocation();

    // Destructure state passed from the parent
    const { 
        marathon_image, 
        title, 
        description, 
        location: loc, 
        start_registration_date, 
        end_registration_date, 
        marathon_start_date 
    } = location.state;

    // Helper function to format dates as mm/dd/yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const dd = String(date.getDate()).padStart(2, "0");
        const yyyy = date.getFullYear(); // Full 4-digit year
        return `${mm}/${dd}/${yyyy}`;
    };

    // Convert date strings to Date objects
    const currentDate = new Date();
    const startDate = new Date(start_registration_date);
    const endDate = new Date(end_registration_date);

    // Determine if the registration is open
    const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;

    return (
        <div>
            {/* Marathon Details */}
            <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
                <img 
                    className="overflow-hidden object-cover border" 
                    src={marathon_image} 
                    alt={title} 
                />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p><strong>Location:</strong> {loc}</p>
                    <p><strong>Registration-Start:</strong> {formatDate(start_registration_date)}</p>
                    <p><strong>Registration-End:</strong> {formatDate(end_registration_date)}</p>
                    <p><strong>Marathon-Start:</strong> {formatDate(marathon_start_date)}</p>

                    {/* Registration Condition */}
                    <div className="card-actions">
                        {isRegistrationOpen ? (
                            <Link to={`/registration/${location.state.id}`}>
                                <button className="btn bg-purple-600 text-white">
                                    Register Open
                                </button>
                            </Link>
                        ) : (
                            <button className="btn bg-gray-400 text-white" disabled>
                                Registration Closed
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingDetails;
