import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const MyCollege = ({ singleAdmitted }) => {
    const { _id, admittedCollegeName, studentName, studentPhoneNumber, studentEmail, dateOfBirth } = singleAdmitted
    

    return (
        <div className='bg-base-100 p-3 rounded w-2/4 mx-auto mb-5'>
            <h2 className='text-xl'>College Name: {admittedCollegeName}</h2>
            <p>Student Name: {studentName}</p>
            <p>Student Email: {studentEmail}</p>
            <p>Student Phone Number: {studentPhoneNumber}</p>
            <p>Date of Birth: {dateOfBirth}</p>
            <Link to={`/review/${_id}`}>
                <button className="btn">Review</button>
            </Link>
        </div>
    );
};

export default MyCollege;