import React from "react";
import profileImage from "../../assets/linkin-modified.png"; // Importing the image

const AboutUsPage = () => {
    return (
        <div className="p-8 min-h-screen ">
            <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-2xl overflow-hidden">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-blue-500 text-white py-10 flex flex-col md:flex-row items-center justify-center">
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl font-bold">MD SAIDUL ISLAM APU</h1>
                        <p className="text-lg italic">Full Stack Web Developer | BRAC University Student | Founder of Management Manage System Ltd</p>
                    </div>
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-32 h-32 mx-auto md:mx-0 rounded-full shadow-lg border-4 border-white mt-6 md:mt-0 md:w-48 md:h-48"
                    />
                </div>


                {/* Main Content */}
                <div className="p-8 space-y-8">
                    {/* About Me Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl transition border-black">
                        <h2 className="text-2xl font-semibold mb-4 text-purple-700">About Me</h2>
                        <p className="text-gray-700 leading-relaxed">
                            I’m Md Saidul Islam Apu, a passionate web developer and university student
                            committed to crafting impactful digital experiences. As the founder of
                            Management Manage System Ltd, I merge creativity and technology to develop
                            solutions that inspire and empower users. My journey is driven by innovation,
                            dedication, and excellence.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl  hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Skills</h2>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Languages:</strong> English, Bangla<br />
                            <strong>Technical Skills:</strong> React, Next.js, Node.js, Express.js, Tailwind CSS, Firebase, MongoDB, Figma (UI Design)
                        </p>
                    </div>

                    {/* Projects Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl  hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Projects</h2>
                        <ul className="text-gray-700 space-y-4">
                            <li>
                                <a
                                    href="https://edumanage-f0f88.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-600 underline hover:bg-pink-300 hover:text-black hover:p-2 hover:rounded-xl"
                                >
                                    EduManage
                                </a> - A project showcasing the grandeur of Edu-Tech Manage system.
                            </li>
                            <li>
                                <a
                                    href="https://crowdcube-1249a.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-800 underline hover:bg-indigo-400 hover:text-black hover:p-2 hover:rounded-xl"
                                >
                                    Crowdcube
                                </a> - Empowering Fundraising with Crowdcube: A Dynamic Crowdfunding Platform.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
