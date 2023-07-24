import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';
import './CollegeCards.css';


const CollegeCards = () => {

    const [collegeDetails, setCollegeDetails] = useState([]);

    useEffect(() => {
        fetch('https://server-side-steel-theta.vercel.app/college-details')
            .then(res => res.json())
            .then(data => setCollegeDetails(data))
    }, [])


    return (
        <div className="container mx-auto">
            <h1 className='py-11 text-3xl font-semibold text-gray-800 md:text-4xl text-center mt-11'>Our Most Popular Colleges</h1>
            <div className='grid grid-cols-3 gap-5'>

                {
                    collegeDetails?.map(collegeDetail =>
                        <CollegeCard
                            key={collegeDetail._id}
                            collegeDetail={collegeDetail}
                        />)
                }
            </div>
        </div>
    );
};

export default CollegeCards;