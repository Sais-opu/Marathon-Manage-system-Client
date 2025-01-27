import { useEffect, useState } from "react";
import MarathonsCard from "./MarathonsCard";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/marathon')
            .then((res) => res.json())
            .then((data) => setMarathons(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, []);

    return (
        <div>
            <h1 className="text-6xl text-center font-bold py-10">Let's Start Marathon</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {marathons.map((marathon) => (
                    <MarathonsCard key={marathon._id} marathon={marathon} />
                ))}
            </div>
        </div>
    );
};

export default Marathons;
