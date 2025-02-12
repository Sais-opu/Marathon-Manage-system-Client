import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Marathon = () => {
    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        fetch('https://marathon-manage-system-server.vercel.app/marathon')
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
                setLoading(false); 
            })
            .catch((err) => {
                console.error("Failed to fetch marathon data:", err);
                setLoading(false); 
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
        <div className="py-6">
            <h1 className="text-4xl font-bold text-center py-6">All Marathons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                {marathons.map((marathon) => (
                    <div
                        key={marathon._id}
                        className="card bg-gradient-to-r from-indigo-800 to-purple-600 shadow-xl border p-4 w-full h-full"
                    >
                        <img
                            className="overflow-hidden object-cover border rounded-lg h-48 w-full"
                            src={marathon.MarathonImage} 
                            alt={`Image of ${marathon.Title}`}
                        />
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-white">{marathon.Title}</h2>
                            <p className="text-white">{marathon.Description}</p>
                            <p className="text-white">
                                <strong>Location:</strong> {marathon.Location}
                            </p>
                            <p className="text-white">
                                <strong>Registration Start:</strong>{" "}
                                {new Date(marathon.StartRegistrationDate).toLocaleDateString()}
                            </p>
                            <p className="text-white">
                                <strong>Registration End:</strong>{" "}
                                {new Date(marathon.EndRegistrationDate).toLocaleDateString()}
                            </p>
                            <p className="text-white">
                                <strong>Marathon Start:</strong>{" "}
                                {new Date(marathon.MarathonStartDate).toLocaleDateString()}
                            </p>
                            <p className="text-white">
                                <strong>Running Distance:</strong> {marathon.RunningDistance}
                            </p>
                            <div className="card-actions">
                                <Link to={`/marathon/${marathon._id}`}>
                                    <button className="btn bg-purple-600 text-white mt-4">See Details</button>
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
