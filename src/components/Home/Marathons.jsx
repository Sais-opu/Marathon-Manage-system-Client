import { useEffect, useState } from "react";
import MarahonsCard from "./MarahonsCard";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/marathon')
            .then(res => res.json())
            .then(data => setMarathons(data))
    }, [])
    return (
        <div>
            <h1 className="text-6xl text-center font-bold py-10">Lets start campaign</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                {
                    marathons.map(marathon => <MarahonsCard key={marathon._id} marathon={marathon}></MarahonsCard>)
                }
            </div>
        </div>
    );
};

export default Marathons;