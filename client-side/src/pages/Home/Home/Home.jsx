import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import CollegeCards from '../CollegeCards/CollegeCards';
import ImageGallery from '../ImageGallery/ImageGallery';


const Home = () => {
    return (
        <div>
            <Banner />
            <CollegeCards />
            <ImageGallery />
            <Testimonial />
        </div>
    );
};

export default Home;