
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
    const { 
        _id, 
        MarathonImage, 
        Title, 
        Description, 
        Location, 
        StartRegistrationDate, 
        EndRegistrationDate, 
        MarathonStartDate, 
        RunningDistance 
    } = useLoaderData();

    // mm/dd/yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const mm = String(date.getMonth() + 1).padStart(2, "0"); 
        const dd = String(date.getDate()).padStart(2, "0");
        const yyyy = date.getFullYear(); 
        return `${mm}/${dd}/${yyyy}`;
    };

    
    const currentDate = new Date();
    const startDate = new Date(StartRegistrationDate);
    const endDate = new Date(EndRegistrationDate);

    const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4">
                <img
                    className="overflow-hidden object-cover border"
                    src={MarathonImage}
                    alt={`Image of ${Title}`}
                />
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p>{Description}</p>
                    <p><strong>Location:</strong> {Location}</p>
                    <p><strong>Registration-Start:</strong> {formatDate(StartRegistrationDate)}</p>
                    <p><strong>Registration-End:</strong> {formatDate(EndRegistrationDate)}</p>
                    <p><strong>Marathon-start:</strong> {formatDate(MarathonStartDate)}</p>
                    <p><strong>Running Distance:</strong> {RunningDistance}</p>

                    
                    {isRegistrationOpen ? (
                        <Link to={`/registration/${_id}`}>
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
    );
};

export default Details;




