import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { BsStar } from 'react-icons/bs';
import { BiSolidStar } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const collegeDetails = useLoaderData()
    const { collegeImage, collegeName, admissionDates, events, research, history, sports, ratings, numberOfResearch, facilities } = collegeDetails;

    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 px-5 md:px-0 gap-5'>
                <div>
                    <img src={collegeImage} alt="" />
                </div>
                <div className='bg-[#F9FAFC] rounded p-5'>
                    <h2 className='text-2xl font-bold'><span>College Name: {collegeName}</span></h2>
                    <p>History: {history}</p>
                    <p>Admission Dates: {admissionDates}</p>
                    <p>Events: {events}</p>
                    <p>Research: {research}</p>
                    <p>Number of Research: {numberOfResearch}</p>
                    <p>Sports: {sports}</p>
                    <p>Facilities: {facilities}</p>
                    <div className='flex gap-3'>
                        <p className='font-bold text-[#FF9801]'>Ratings: {ratings}</p>
                        <Rating
                            placeholderRating={3.5}
                            emptySymbol={<BsStar className='text-[#FF9801]' />}
                            readonly
                            placeholderSymbol={<BiSolidStar className='text-[#FF9801]' />}
                            fullSymbol={<BiSolidStar className='text-[#FF9801]' /> }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;