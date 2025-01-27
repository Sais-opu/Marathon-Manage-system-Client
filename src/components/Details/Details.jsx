
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
    const { MarathonImage, Title, Description, Location, StartRegistrationDate, EndRegistrationDate } = useLoaderData();
    
    const parseDate = (dateString) => {
        const [month, day, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };
    const normalizeDate = (date) => {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    };
    const startDate = normalizeDate(parseDate(StartRegistrationDate));
    const endDate = normalizeDate(parseDate(EndRegistrationDate));
    const currentDate = normalizeDate(new Date());

    console.log(startDate, endDate, currentDate)
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
                    <p><strong>Registration-Start:</strong> {StartRegistrationDate}</p>
                    <p><strong>Registration-End:</strong> {EndRegistrationDate}</p>

                    {isRegistrationOpen ? (
                        <Link to="/registration">
                            <button className="btn bg-purple-600 text-white">
                                Register
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



