import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const CollegeCard = ({ collegeDetail }) => {
    const { _id, collegeName, collegeImage, admissionDates, events, research, history, sports } = collegeDetail;

    return (
        <div className='college-cards cursor-pointer border rounded-lg'>
            <img src={collegeImage} alt="" />
            <div className='p-3'>
                <h2 className='text-xl font-bold'> {collegeName}</h2>
                <p>Admission Dates: {admissionDates.slice(0, 30)}...</p>
                <p>Events: {events.slice(0, 30)}...</p>
                <p>Research: {research.slice(0, 30)}...</p>
                <p>History: {history.slice(0, 30)}...</p>
                <p>Sports: {sports.slice(0, 30)}...</p>
                <Link to={`/college-details/${_id}`}>
                    <button className='bg-[#4F26F9] text-white px-5 py-2 mt-4 rounded hover:bg-[#4627c4] transition ease-in-out delay-150 duration-300 '>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CollegeCard;