import React from 'react';
import "./Banner.css";
import bannerOne from '../../../assets/images/banner/bannerOne.jpg'

const Banner = () => {
    return (
        <div className="w-full bg-gray-200">
            <div className="banner-main flex bg-white">
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
                        <p className="mt-2 text-sm text-gray-500 md:text-base"> consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                            <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="banner-clip hidden lg:block lg:w-1/2">
                    <div className="banner-image h-full object-cover">
                        <div className="h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;