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
            <div className="bg-gradient-to-b from-purple-700 to-indigo-600 my-5 rounded-xl min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-center text-3xl md:text-4xl lg:text-6xl mb-6">Long-Term Health Benefits of Running a Marathon</h1>

                <div className="my-2">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                        Running a marathon offers numerous long-term health benefits that extend far beyond the race itself. Regular marathon training improves cardiovascular health by strengthening the heart, enhancing circulation, and reducing the risk of heart disease. It boosts lung capacity, improves overall respiratory efficiency, and helps maintain a healthy weight by burning calories and building lean muscle. The consistent physical exertion also supports mental health by reducing stress, boosting mood through endorphin release, and providing a natural outlet for anxiety and depression. Marathon training fosters mental toughness and self-confidence, and crossing the finish line creates a lasting sense of accomplishment. Over time, running improves bone density, joint health, and reduces the risk of osteoporosis, while also delaying the onset of chronic conditions like diabetes, hypertension, and certain cancers by regulating blood sugar and improving metabolic function. Additionally, marathon running encourages healthy habits, such as focusing on nutrition, hydration, and rest, creating a balanced lifestyle that promotes sustained wellness. It can also foster a sense of community and support through group training and race participation, enhancing motivation and consistency. Ultimately, the long-term health benefits of running a marathon contribute to better physical and mental well-being, improved quality of life, and a sense of accomplishment that lasts for years.
                    </p>
                </div>

                <div className="p-4 md:p-10 flex justify-center hover:animate-pulse">
                    <iframe
                        className="w-full max-w-3xl"
                        height="auto"
                        src="https://www.youtube.com/embed/Tbd10JwbQOc"
                        title="Are There Long-Term Health Benefits To Running A Marathon?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            {/* how it help you */}
            <h1 className="text-center text-6xl py-10 font-bold">How to imporve you life style</h1>
            <div>
                <div className="hero bg-gradient-to-b from-purple-700 to-indigo-600 my-5 rounded-lg border">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={How1}
                            className="rounded-lg shadow-2xl"
                            alt="Support a Worthy Cause"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">Support a Worthy Cause</h1>
                            <p className="py-6">
                                Participating in marathons not only helps improve your fitness and stamina but also plays a significant role in supporting causes that matter. Many marathons are organized to raise funds for a variety of charitable organizations, ranging from healthcare initiatives to environmental conservation projects. By taking part in these events, runners become part of a larger effort to drive positive change, with every step they take contributing to the cause.Whether you're running for cancer research, mental health awareness, or to help provide clean water in underserved communities, marathons provide an impactful platform for individuals to make a difference. The funds raised through participants' entry fees, donations, and sponsorships go directly to these charities, empowering them to continue their crucial work. Additionally, marathons often involve community outreach, bringing together individuals from diverse backgrounds who are all united by the desire to support a common goal.
                            </p>
                            <a
                                href="https://www.youtube.com/embed/VWy7oKAATsI"
                                target="_blank" // Opens in a new tab
                                rel="noopener noreferrer" // For security
                            >
                                <button className="btn bg-purple-600 text-white">See more</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            {/* ----------------- */}
            <div className="hero bg-gradient-to-b from-purple-700 to-indigo-600 px-4 my-5 rounded-lg gap-2 border">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={How2}
                        className="max-w-md rounded-lg shadow-2xl"
                        alt="Boost Self-Confidence"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">Boost Self-Confidence</h1>
                        <p className="py-6">
                            Boosting self-confidence begins with recognizing your strengths and embracing your accomplishments. By setting small, achievable goals and celebrating each victory, you gradually build a positive mindset. Practicing self-love, along with positive affirmations, reinforces your belief in your abilities and helps overcome self-doubt. Surrounding yourself with supportive people and engaging in activities that bring you joy further strengthens your confidence. With time and persistence, these habits empower you to face challenges with a resilient and positive outlook, fostering a stronger belief in yourself.This version sums up the key points in one paragraph, while still conveying the importance of self-awareness, goal-setting, and positive practices.
                        </p>
                        <a
                            href="https://www.youtube.com/embed/vhbsPbxZW2U"
                            target="_blank" // Opens in a new tab
                            rel="noopener noreferrer" // For security
                        >
                            <button className="btn bg-purple-600 text-white">See more</button>
                        </a>
                    </div>
                </div>

            </div>
            {/* ------------------ */}
            <div>
                <div className="hero bg-gradient-to-b from-purple-700 to-indigo-600 my-5 rounded-lg border">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={How3}
                            className="max-w-md rounded-lg shadow-2xl"
                            alt="Discover New Places and Experiences"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">Discover New Places and Experiences</h1>
                            <p className="py-6">
                                Marathons offer a unique opportunity to explore new places while challenging your body and mind. Many marathons take participants through scenic routes and iconic landmarks, allowing runners to discover hidden gems and experience the beauty of their surroundings in a way that few other activities can offer. Whether it's running through bustling city streets, serene countryside, or along picturesque coastlines, each marathon provides a new adventure, combining physical endurance with the joy of exploration. This blend of personal achievement and the excitement of discovering new destinations makes marathons an unforgettable way to experience the world.This captures the essence of marathons as an exciting way to both travel and push personal limits. Let me know if you'd like to tweak anything!
                            </p>
                            <a
                                href="https://www.youtube.com/embed/O3FK2Pky-lY"
                                target="_blank" // Opens in a new tab
                                rel="noopener noreferrer" // For security
                            >
                                <button className="btn bg-purple-600 text-white">See more</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Home;