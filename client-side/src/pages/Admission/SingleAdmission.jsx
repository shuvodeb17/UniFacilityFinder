import React from 'react';
import { Link } from 'react-router-dom';

const SingleAdmission = ({ college }) => {
    const { _id, collegeName } = college;
    return (
        <Link to={`/admission-form/${_id}`} className='border p-4 rounded cursor-pointer bg-base-100 hover:bg-base-200'>
            <h2 className="text-xl font-bold">{collegeName}</h2>
        </Link>
    );
};

export default SingleAdmission;