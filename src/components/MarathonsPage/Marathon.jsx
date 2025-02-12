import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Marathon = () => {
    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    
    useEffect(() => {
        fetch('https://marathon-manage-system-server.vercel.app/marathon')
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((err) => {
                console.error("Failed to fetch marathon data:", err);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid rounded-full border-purple-600 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center py-6">All Marathons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                {marathons.map((marathon) => (
                    <div
                        key={marathon._id}
                        className="card card-compact bg-gradient-to-r from-indigo-800 to-purple-600 w-96 shadow-xl border p-4 "
                    >
                        <img
                            className="overflow-hidden object-cover border rounded-lg h-48"
                            src={marathon.MarathonImage} 
                            alt={`Image of ${marathon.Title}`}
                        />
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{marathon.Title}</h2>
                            <p>{marathon.Description}</p>
                            <p>
                                <strong>Location:</strong> {marathon.Location}
                            </p>
                            <p>
                                <strong>Registration Start:</strong>{" "}
                                {new Date(marathon.StartRegistrationDate).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Registration End:</strong>{" "}
                                {new Date(marathon.EndRegistrationDate).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Marathon Start:</strong>{" "}
                                {new Date(marathon.MarathonStartDate).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Running Distance:</strong> {marathon.RunningDistance}
                            </p>
                            <div className="card-actions">
                                <Link to={`/marathon/${marathon._id}`}>
                                    <button className="btn bg-purple-600 text-white">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marathon;
