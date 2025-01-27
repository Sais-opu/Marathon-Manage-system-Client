import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
    const { _id, MarathonImage, Title, Description, Location, StartRegistrationDate, EndRegistrationDate, MarathonStartDate, RunningDistance } = useLoaderData();

    // Normalize the current date for comparison
    const normalizeDate = (dateString) => {
        // Check if the dateString exists and is valid
        if (!dateString) {
            return null; // Return null if the date is missing or invalid
        }
        
        const parts = dateString.split('/');
        if (parts.length !== 3) {
            return null; // Return null if the format is not as expected
        }

        const [month, day, year] = parts;
        const fullYear = year.length === 2 ? `20${year}` : year; // Ensure full year
        return new Date(`${fullYear}-${month}-${day}`);
    };

    const startDate = normalizeDate(StartRegistrationDate);
    const endDate = normalizeDate(EndRegistrationDate);
    const marathonStart = normalizeDate(MarathonStartDate);
    const currentDate = new Date();

    const isRegistrationOpen = startDate && endDate && currentDate >= startDate && currentDate <= endDate;

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
                    {/* Display dates exactly as they are */}
                    <p><strong>Registration-Start:</strong> {StartRegistrationDate || "N/A"}</p>
                    <p><strong>Registration-End:</strong> {EndRegistrationDate || "N/A"}</p>
                    <p><strong>Marathon-start:</strong> {MarathonStartDate || "N/A"}</p>
                    <p><strong>RunningDistance:</strong> {RunningDistance}</p>

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








