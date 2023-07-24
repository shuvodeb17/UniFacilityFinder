import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Rating from 'react-rating';
import { BiSolidStar } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/all-reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container mx-auto p-11'>
            <h1 className="text-2xl font-bold text-center">Testimonial</h1>
            <h1 className="text-xl font-bold text-center">Whats our Students say</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <div>
                        <SwiperSlide>
                            <div>
                                <img style={{width:'70px'}} className='rounded-full mx-auto' src={review?.photo} alt="" />
                                <h1>Name: {review?.studentName}</h1>
                                <h1>Review: {review?.reviews}</h1>
                                <h1>Review: {review?.ratings}</h1>
                                <Rating
                                    placeholderRating={3.5}
                                    emptySymbol={<BsStar className='text-[#FF9801]' />}
                                    readonly
                                    placeholderSymbol={<BiSolidStar className='text-[#FF9801]' />}
                                    fullSymbol={<BiSolidStar className='text-[#FF9801]' />}
                                />
                            </div>
                        </SwiperSlide>
                    </div>)
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Testimonial;