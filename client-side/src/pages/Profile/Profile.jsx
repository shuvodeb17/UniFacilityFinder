import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';



const Profile = () => {

    const [details, setDetails] = useState({});
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:3001/admission-all-data?studentEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data[0])
            })
    }, [user])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.studentName)
        const updateData = { studentName: data?.studentName, studentEmail: data?.studentEmail, admittedCollegeName: data?.admittedCollegeName, address: data?.address }
        fetch(`http://localhost:3001/profile-details-update/${details?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('User Details Updated')
                }
            })
    }


    return (
        <section className='bg-base-300 h-screen'>
            <div className="container mx-auto">
                <div className='w-2/6 bg-base-200 rounded text-center p-3 mx-auto'>

                    <button onClick={() => window.my_modal_1.showModal()} className='flex items-center justify-items-end bg-green-600 text-white p-2 rounded '>
                        <p className='mr-4'>Edit</p>
                        <FaPen />
                    </button>

                    <img className='rounded-full text-center mx-auto' src={user?.photoURL} alt="" />
                    <p>Name: {details?.studentName}</p>
                    <p>Email: {details?.studentEmail}</p>
                    <p>College Name: {details?.admittedCollegeName}</p>
                    <p>Address: {details?.address}</p>
                </div>

                {/* modal */}
                <dialog id="my_modal_1" className="modal">
                    <div method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Update Details</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="w-full px-3 mb-2">
                                <label for="" class="text-xs font-semibold px-1">Student Name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input {...register("studentName")} defaultValue={details?.studentName} type="Student Name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Student Name" />
                                </div>
                            </div>
                            <div class="w-full px-3">
                                <label for="" class="text-xs font-semibold px-1">Student Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input {...register("studentEmail")} defaultValue={details?.studentEmail} type="Student Name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Student Email" />
                                </div>
                            </div>
                            <div class="w-full px-3 mt-2">
                                <label for="" class="text-xs font-semibold px-1">College Name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input {...register("admittedCollegeName")} defaultValue={details?.admittedCollegeName} type="Student Name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="College Name" />
                                </div>
                            </div>
                            <div class="w-full px-3 mt-2">
                                <label for="" class="text-xs font-semibold px-1">Address</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input {...register("address")} defaultValue={details?.address} type="Student Name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Address" />
                                </div>
                            </div>
                            <button className="btn bg-green-500 mt-5 text-center text-white mx-auto">Save</button>
                            <Toaster />
                        </form>

                        <div method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </div>

                    </div>
                </dialog>

            </div>
        </section>
    );
};

export default Profile;