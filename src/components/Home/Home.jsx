import Marathons from './Marathons'
import Slider from './Slider';
import Upcoming from './Upcoming';
import How1 from '../../../src/assets/how1.jpg'
import How2 from '../../../src/assets/how2.jpg'
import How3 from '../../../src/assets/how3.jpg'

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
                            Many marathons are organized to raise funds for charities. By participating, you contribute to impactful causes and help make a difference.
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
                        <h1 className="text-3xl font-bold">Boost Self-Confidence</h1>
                        <p className="py-6">
                        Completing a marathon is a significant achievement. It instills a sense of pride and confidence, proving you can conquer challenges in life.
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
                            <h1 className="text-3xl font-bold">Discover New Places and Experiences</h1>
                            <p className="py-6">
                            Marathons often take you to scenic routes and iconic landmarks, offering a unique way to explore and appreciate new destinations.
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