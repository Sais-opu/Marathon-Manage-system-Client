import Marathons from './Marathons'
import Slider from './Slider';
import Upcoming from './Upcoming';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Marathons></Marathons>
            <Upcoming></Upcoming>
            {/* Youtube */}
            <div className=" bg-purple-400 min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-center text-6xl  mb-6">Long-Term Health Benefits of Running a Marathon</h1>
                <div>
                    <p>Discover how running a marathon positively impacts your physical and mental health, from boosting cardiovascular strength to enhancing emotional well-being. Learn why the journey to the finish line is more than just a race.</p>
                </div>
                <div className=" p-10 flex justify-center">

                <iframe width="914" height="514" src="https://www.youtube.com/embed/Tbd10JwbQOc" title="Are There Long-Term Health Benefits To Running A Marathon?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            {/* how it help you */}
            <h1 className="text-center text-6xl py-10 font-bold">How to imporve you life style</h1>
            <div>
                <div className="hero bg-purple-400 py-10 rounded-lg border">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <img
                            src={How1}
                            className="rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">Support a Worthy Cause</h1>
                            <p className="py-6">
                                Winter in Bangladesh is challenging for underprivileged communities lacking warm clothing. Donating winter essentials like blankets, sweaters, and jackets can help vulnerable families stay safe during the cold months. Join local charities or organize a drive to make a meaningful impact this season.
                            </p>
                            <button className="btn bg-purple-600 text-white ">See more</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- */}
            <div className="hero bg-purple-400 py-10 rounded-lg gap-2 border">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={How2}
                        className="max-w-md  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Find a Collection Point</h1>
                        <p className="py-6">
                            Drop off your donations at our collection points across Bangladesh.
                        </p>
                        <button className="btn bg-purple-600 text-white ">See more</button>
                    </div>
                </div>
            </div>
            {/* ------------------ */}
            <div>
                <div className="hero bg-purple-400 py-10 rounded-lg border">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <img
                            src={How3}
                            className="max-w-md rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">We Distribute to Supported Divisions</h1>
                            <p className="py-6">
                                Donations are distributed to underserved communities in Rangpur, Rajshahi and Chuadanga.
                            </p>
                            <button className="btn bg-purple-600 text-white ">See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;