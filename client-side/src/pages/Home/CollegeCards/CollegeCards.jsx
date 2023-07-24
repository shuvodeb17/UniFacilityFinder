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
        <div className="container mx-auto px-5 md:px-0">

            <h2 className="mt-11 py-5 pt-11 text-center text-2xl font-semibold text-gray-800 md:text-3xl">Our Most <span className="text-indigo-600">Popular Colleges</span></h2>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>

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