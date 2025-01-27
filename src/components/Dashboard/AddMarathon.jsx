

const AddMarathon = () => {

    const handleAddMarahton = e => {
        e.preventDefault()
        const formData = new FormData(e.target);

        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)

        fetch('http://localhost:5000/marathon', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(initialData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position:"top-end",
                        icon: 'success',
                        title: 'Marathon Added!',
                        text: 'Your Marathon has been added successfully.',
                        showComfirmButton:false,
                        timer:1500
                    });

                }
            })
    }


    return (
        <div>
            <div className="md:px-32">
                <h2 className="font-extrabold text-4xl my-6">Add New Marathon</h2>
                <form onSubmit={handleAddMarahton} className="space-y-6">
                    <div>
                        <label htmlFor="Title" className="block text-sm font-medium text-gray-700">
                            Marathon Title
                        </label>
                        <input
                            type="text"
                            id="Title"
                            name="Title"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="StartRegistrationDate" className="block text-sm font-medium text-gray-700">
                            Start Registration Date
                        </label>
                        <input
                            type="date"
                            id="StartRegistrationDate
"
                            name="StartRegistrationDate
"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="EndRegistrationDate" className="block text-sm font-medium text-gray-700">
                            End Registration Date
                        </label>
                        <input
                            type="date"
                            id="EndRegistrationDate"
                            name="EndRegistrationDate"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="MarathonStartDate" className="block text-sm font-medium text-gray-700">
                            Marathon start date
                        </label>
                        <input
                            type="date"
                            id="MarathonStartDate"
                            name="MarathonStartDate"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="Location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="Location"
                            name="Location"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="RunningDistance" className="block text-sm font-medium text-gray-700">
                            Running Distance
                        </label>
                        <select
                            id="RunningDistance"
                            name="RunningDistance"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        >
                            <option value="25K">25K</option>
                            <option value="3K">3K</option>
                            <option value="10K">10K</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="Description"
                            name="Description"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="MarathonImage" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="MarathonImage"
                            name="MarathonImage"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                            User Email
                        </label>
                        <input
                            type="text"
                            id="userEmail"
                            name="userEmail"

                            readOnly
                            className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"

                            readOnly
                            className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        />
                    </div> */}
                    <div>
                        <button className="w-full bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-900 transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;