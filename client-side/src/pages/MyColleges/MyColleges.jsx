import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyCollege from './MyCollege';

const MyColleges = () => {
    const { user } = useContext(AuthContext);
    const [admitted, setAdmitted] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/admission-all-data?studentEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmitted(data))
    }, [])
    return (
        <section className="bg-base-200 p-5">
            <div className="container mx-auto">
                <h1 className='text-center font-bold text-2xl'>My College</h1>
                <div className='mt-5'>
                    {
                        admitted?.map(singleAdmitted => <MyCollege
                            key={singleAdmitted?.id}
                            singleAdmitted={singleAdmitted}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyColleges;