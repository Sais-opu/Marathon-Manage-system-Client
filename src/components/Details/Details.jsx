import { useLoaderData } from "react-router-dom";

const Details = () => {
    const { MarathonImage, Title, Description, Location, StartRegistrationDate, EndRegistrationDate } = useLoaderData();

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
                    <button className="btn bg-purple-600 text-white">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Details;
