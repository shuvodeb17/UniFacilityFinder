import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner-wrapper'>
            <div className='banner-child flex items-center justify-center text-center'>
                <div className="container mx-auto">
                    <div className='text-white'>
                        <h1 className='text-4xl font-bold'>The World's Leading Distance-Learning Provider</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;