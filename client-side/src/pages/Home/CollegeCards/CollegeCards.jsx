import React, { useEffect, useState } from 'react';
import cardOne from '../../../assets/images/collegeCards/cardImage1.jpg'
import Rating from 'react-rating';
import { BiSolidStar } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';
import './CollegeCards.css';
import CollegeCard from '../CollegeCard/CollegeCard';

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

    const [collegeDetails, setCollegeDetails] = useState([]);

    useEffect(() => {
        fetch('../../../../public//collegeDetails.json')
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