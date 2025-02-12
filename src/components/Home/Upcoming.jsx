import { useEffect, useState } from "react";
import UpcomingCard from "./UpcomingCard";

const Upcoming = () => {
    const [upcomings, setUpcomings] = useState([]);

    useEffect(() => {
        fetch('/upcoming.json')
            .then(res => res.json())
            .then(data => setUpcomings(data));
    }, []);

    return (
        <div>
            <h1 className="text-6xl text-center font-bold py-10">Upcoming Marathon</h1>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {upcomings.map(upcoming => (
                    <UpcomingCard upcoming={upcoming} key={upcoming.id} />
                ))}
            </div>
        </div>
    );
};

export default Upcoming;
