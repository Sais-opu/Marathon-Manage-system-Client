import { useEffect, useState } from "react";
import MarathonsCard from "./MarathonsCard";


const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    useEffect(() => {
        fetch('https://marathon-manage-system-server.vercel.app/marathon/first6')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setMarathons(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, []);

    return (
        <div>
            <h1 className="text-6xl text-center  font-bold py-10">Lets start Marathon</h1>
            <div className="gap-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                {
                    marathons.map(marathon => <MarathonsCard key={marathon._id} marathon={marathon}></MarathonsCard>)
                }
            </div>
        </div>
    );
};

export default Marathons;