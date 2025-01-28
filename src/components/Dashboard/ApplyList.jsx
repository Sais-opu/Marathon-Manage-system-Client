import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/authProvider";





const ApplyList = () => {

    const { user } = useContext(AuthContext);
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`https://marathon-manage-system-server-gsjks2n58.vercel.app/job-applylist?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((err) => console.error("Failed to fetch marathons:", err));
    }, [user.email]);



    return (
        <div>
            <h2>my apply list: {list.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            list.map((lists,index) => <tr key={lists._id} className="bg-base-200">
                                <th>{index + 1}</th> 
                                <td>{lists.Title}</td> 
                                <td>{lists.MarathonStartDate}</td> 
                                <td>{lists.contactInfo}</td> 
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplyList;