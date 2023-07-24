import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './ImageGallery.css';

// import required modules
import { Pagination } from 'swiper/modules';

import { default as imageOne, default as imageSeven } from '../../../assets/images/imageGallery/image1.jpg';
import imageTwo from '../../../assets/images/imageGallery/image2.jpg';
import imageThree from '../../../assets/images/imageGallery/image3.jpg';
import imageFour from '../../../assets/images/imageGallery/image4.jpg';
import imageFive from '../../../assets/images/imageGallery/image5.jpg';
import imageSix from '../../../assets/images/imageGallery/image6.jpg';

const ImageGallery = () => {
    return (
        <div className='py-11'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold text-center mb-5'>Image Gallery</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={imageOne} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageTwo} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageThree} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFour} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageFive} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageSix} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imageSeven} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ImageGallery;