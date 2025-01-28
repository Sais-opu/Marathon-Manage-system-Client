import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";




const MarathonList = () => {
    const [mylist, setMyList] = useState([])

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://marathon-manage-system-server-gsjks2n58.vercel.app/job-applylist?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyList(data))
    }, [user.email])


    return (
        <div>
            <h2>Hello{mylist.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Marathon Title</th>
                            <th>Regitration Deadline</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mylist.map((list,index)=><tr key={list._id}>
                                <th>{index+1}</th>
                                <td>{list.Title}</td>
                                <td>{list.EndRegistrationDate }</td>
                                <td>Blue</td>
                            </tr>)
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarathonList;