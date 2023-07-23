import React, { useEffect, useState } from 'react';
import SingleAdmission from './SingleAdmission';

const Admission = () => {

    const [colleges, setColleges] = useState([]);
    console.log(colleges)
    useEffect(() => {
        fetch('http://localhost:3001/college-details')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <section>
            <div className="container mx-auto">
                <h1 className='text-center font-bold text-2xl'>Admission</h1>
                <div className='grid grid-cols-2 gap-5 mt-3'>
                            {
                                colleges.map(college => <SingleAdmission
                                    key={college._id}
                                    college={college}
                                />)
                            }
                </div>
            </div>
        </section>
    );
};

export default Admission;