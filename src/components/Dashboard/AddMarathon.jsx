

const AddMarathon = () => {
    return (
        <div>
            <div className="md:px-32">
                <h2 className="font-extrabold text-4xl my-6">Add New Marathon</h2>
                <form className="space-y-6">

                    <div>
                        <label htmlFor="marathonTitle" className="block text-sm font-medium text-gray-700">
                            Marathon Title
                        </label>
                        <input
                            type="text"
                            id="marathonTitle"
                            name="marathonTitle"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                            Start Registration Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                            End Registration Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="startMarathonDate" className="block text-sm font-medium text-gray-700">
                            Marathon start date
                        </label>
                        <input
                            type="date"
                            id="startMarathonDate"
                            name="startMarathonDate"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="number"
                            id="location"
                            name="location"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="runningDistance" className="block text-sm font-medium text-gray-700">
                            Running Distance
                        </label>
                        <select
                            id="runningDistance"
                            name="runningDistance"

                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        >
                            <option value="personal issue">25K</option>
                            <option value="startup">3K</option>
                            <option value="business">10K</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
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
                    </div>
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