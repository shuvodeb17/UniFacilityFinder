import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';
import './CollegeCards.css';


const CollegeCards = () => {

    const [collegeDetails, setCollegeDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/college-details')
            .then(res => res.json())
            .then(data => setCollegeDetails(data))
    }, [])


    return (
        <div className="container mx-auto">
            <h1 className='py-11 text-center text-3xl font-bold text-[#140342]'>Our Most Popular Colleges</h1>
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