import React from 'react';

const SingleAdmission = ({ college }) => {
    const { collegeName } = college;
    return (
        <div className='border p-4 rounded cursor-pointer bg-base-100 hover:bg-base-200'>
            <h2 className="text-xl font-bold">{collegeName}</h2>
        </div>
    );
};

export default SingleAdmission;