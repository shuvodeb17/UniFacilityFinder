import React from 'react';
import cardOne from '../../../assets/images/collegeCards/cardImage1.jpg'
import Rating from 'react-rating';
import { BiSolidStar } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';
import './CollegeCards.css';

{/* <div className='flex gap-3'>
    <p className='font-bold text-[#FF9801]'>4.7</p>
    <Rating
        placeholderRating={3.5}
        emptySymbol={<BsStar className='text-[#FF9801]' />}
        readonly
        placeholderSymbol={<BiSolidStar className='text-[#FF9801]' />}
        fullSymbol={<BiSolidStar className='text-[#FF9801]' />}
    />
</div> */}

const CollegeCards = () => {
    
    
    return (
        <div className="container mx-auto">
            <h1 className='py-11 text-center text-3xl font-bold text-[#140342]'>Our Most Popular Courses</h1>
            <div className='grid grid-cols-3 gap-5'>
                <div className='college-cards cursor-pointer border rounded-lg'>
                    <img src={cardOne} alt="" />
                    <div className='p-3'>
                        <h2 className='text-xl font-bold'>Brindaban Govt College, Habiganj</h2>
                        <p>Admission Dates: </p>
                        <p>Events: </p>
                        <p>Research: </p>
                        <p>History: </p>
                        <p>Sports: </p>
                        <button className='bg-[#4F26F9] text-white px-5 py-2 mt-4 rounded hover:bg-[#4627c4] transition ease-in-out delay-150 duration-300 '>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCards;