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
        <div className="container mx-auto p-4">
            {/* Card Layout for Marathon Details */}
            <div className="card card-side bg-gradient-to-t from-purple-700 to-indigo-800 shadow-xl border mx-auto w-full max-w-screen-lg">
                {/* Left side: Image */}
                <figure className="p-5 flex-shrink-0">
                    <img
                        className="w-full max-w-[600px] h-auto rounded-xl"
                        src={MarathonImage}
                        alt={`Image of ${Title}`}
                    />
                </figure>
                
                {/* Right side: Text content */}
                <div className="card-body text-left flex-1 p-5">
                    <h2 className="card-title text-3xl font-semibold mb-4 text-red-600">{Title}</h2>
                    <p className="text-gray-900 mb-4">{Description}</p>
                    <p><strong className="font-medium">Location:</strong> {Location}</p>
                    <p><strong className="font-medium">Registration Start:</strong> {formatDate(StartRegistrationDate)}</p>
                    <p><strong className="font-medium">Registration End:</strong> {formatDate(EndRegistrationDate)}</p>
                    <p><strong className="font-medium">Marathon Start:</strong> {formatDate(MarathonStartDate)}</p>
                    <p><strong className="font-medium">Running Distance:</strong> {RunningDistance}</p>

                    {/* Conditional rendering for the registration button */}
                    <div className="mt-6">
                        {isRegistrationOpen ? (
                            <Link to={`/registration/${_id}`}>
                                <button className="btn bg-purple-600 text-white w-full py-2 rounded-md hover:bg-indigo-600">
                                    Register Now
                                </button>
                            </Link>
                        ) : (
                            <button className="btn bg-gray-400 text-white w-full py-2 rounded-md" disabled>
                                Registration Closed
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
