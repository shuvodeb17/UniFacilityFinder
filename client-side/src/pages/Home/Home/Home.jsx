import React from 'react';
import Footer from '../../Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;