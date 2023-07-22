import React from 'react';
import Banner from '../Banner/Banner';
import CollegeCards from '../CollegeCards/CollegeCards';
import ImageGallery from '../ImageGallery/ImageGallery';


const Home = () => {
    return (
        <div>
            <Banner />
            <CollegeCards />
            <ImageGallery />
        </div>
    );
};

export default Home;