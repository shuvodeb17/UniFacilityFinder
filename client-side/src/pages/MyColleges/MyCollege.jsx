import React from 'react';

const MyCollege = ({ singleAdmitted }) => {
    console.log(singleAdmitted)
    const { admittedCollegeName,studentName, studentPhoneNumber,studentEmail,dateOfBirth} = singleAdmitted

    return (
        <div className='bg-base-100 p-3 rounded w-2/4 mx-auto mb-5'>
            <h2 className='text-xl'>College Name: {admittedCollegeName}</h2>
            <p>Student Name: {studentName}</p>
            <p>Student Email: {studentEmail}</p>
            <p>Student Phone Number: {studentPhoneNumber}</p>
            <p>Date of Birth: {dateOfBirth}</p>
        </div>
    );
};

export default MyCollege;