import { useEffect, useState } from "react";

const Marathon = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:5000/marathon')
            .then((res) => res.json())
            .then((data) => setMarathons(data))
            .catch((err) => console.error("Failed to fetch marathon data:", err));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">All Marathons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.map((marathon) => (
                    <div
                        key={marathon._id}
                        className="card card-compact bg-base-100 w-96 shadow-xl border p-4 gap-4"
                    >
                        <img
                            className="overflow-hidden object-cover border rounded-lg h-48"
                            src={marathon.MarathonImage} // Use MarathonImage for the image URL
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marathon;
