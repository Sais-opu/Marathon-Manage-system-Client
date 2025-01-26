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
        {
            marathons.map(marathon=><MarahonsCard key={marathon._id} marathon={marathon}></MarahonsCard>)
        }
    </div>
);
};

export default Marathons;