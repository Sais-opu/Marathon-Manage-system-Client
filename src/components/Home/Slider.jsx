import slider1Image from '../../../src/assets/slide1.jpg'
import slider2Image from '../../../src/assets/slide2.jpg'
import slider3Image from '../../../src/assets/slide3.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1Image}
                    className="w-full h-[500px] object-contain" />
                <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                    <h2 className="text-xl font-bold">Boost Your Health and Fitness</h2>
                    <p>Marathons are a great way to enhance your cardiovascular health and build endurance. They push you to achieve new fitness milestones, leading to a healthier lifestyle.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2Image} className="w-full h-[500px] object-contain" />
                <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                    <h2 className="text-xl font-bold">Achieve Personal Growth and Confidence</h2>
                    <p>Completing a marathon strengthens your resilience and boosts your self-esteem. It's a transformative experience that proves you can overcome any challenge</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3Image} className="w-full h-[500px] object-contain" />
                <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                    <h2 className="text-xl font-bold">Join a Community of Like-Minded Individuals</h2>
                    <p>Your donations make a real difference in the lives of many.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;