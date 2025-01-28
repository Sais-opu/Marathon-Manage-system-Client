import { useLocation, Link } from "react-router-dom";

const UpcomingDetails = () => {
    const location = useLocation();

    
    const { 
        marathon_image, 
        title, 
        description, 
        location: loc, 
        start_registration_date, 
        end_registration_date, 
        marathon_start_date 
    } = location.state;


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const mm = String(date.getMonth() + 1).padStart(2, "0"); 
        const dd = String(date.getDate()).padStart(2, "0");
        const yyyy = date.getFullYear(); 
        return `${mm}/${dd}/${yyyy}`;
    };

    
    const currentDate = new Date();
    const startDate = new Date(start_registration_date);
    const endDate = new Date(end_registration_date);

    const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;

    return (
        <div>
            
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
