import React, { useState } from 'react';
import slider1Image from '../../../src/assets/ns4.jpg';
import slider2Image from '../../../src/assets/ns2.webp';
import slider3Image from '../../../src/assets/ns3.jpg';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle state

    const slides = [
        { id: "slide3", image: slider3Image, title: "Boost Your Health and Fitness", description: "Marathons are a great way to enhance your cardiovascular health and build endurance. They push you to achieve new fitness milestones, leading to a healthier lifestyle." },
        { id: "slide2", image: slider2Image, title: "Achieve Personal Growth and Confidence", description: "Completing a marathon strengthens your resilience and boosts your self-esteem. It's a transformative experience that proves you can overcome any challenge." },
        { id: "slide1", image: slider1Image, title: "Join a Community of Like-Minded Individuals", description: "Marathons connect you with a diverse community of runners and supporters. The shared experience creates lasting bonds and a sense of belonging." }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Toggle dark mode state
    };

    return (
        <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300`}>
            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className={`absolute top-5 right-5 p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Carousel */}
            <div className="carousel w-full relative ">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`carousel-item w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
                        <img
                            src={slide.image}
                            className={`w-full h-[500px] object-cover transition-all duration-500 ${isDarkMode ? 'filter brightness-50' : ''}`} // Darken image in dark mode
                            alt={slide.title}
                        />
                        <div className={`absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black`}>
                            <h2 className="text-xl font-bold text-white">{slide.title}</h2>
                            <p className='text-white'>{slide.description}</p>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                    <button onClick={prevSlide} className="btn btn-circle">❮</button>
                    <button onClick={nextSlide} className="btn btn-circle">❯</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
