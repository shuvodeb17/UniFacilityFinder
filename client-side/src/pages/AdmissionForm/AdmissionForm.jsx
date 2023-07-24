import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';


const AdmissionForm = () => {
    const { user } = useContext(AuthContext);
    const collegeData = useLoaderData()
    const { collegeName, collegeImage, events, research, history, sports, ratings, numberOfResearch, facilities } = collegeData;
    console.log(collegeData)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const insertData = { studentName: data.studentName, address: data.address, studentEmail: data.studentEmail, studentPhoneNumber: data.studentPhoneNumber, admittedCollegeName: data.admittedCollegeName, dateOfBirth: data.dateOfBirth, feedback: '', reviews: '', photo: user?.photoURL, collegeImage: collegeImage, events, research,history,sports,ratings,numberOfResearch,facilities }
        fetch('http://localhost:3001/admission-data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(insertData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Admission successful')
                }
            })
    }

    return (
        <div>
            <div className="container mx-auto">
                <h1 className='text-2xl font-bold text-center'>Admission Form </h1>

                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 ">
                            <label for="" class="text-xs font-semibold px-1">Name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input {...register("studentName")} value={user?.displayName} type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 ">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input {...register("studentEmail")} value={user?.email} type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3">
                            <label for="" class="text-xs font-semibold px-1">College Name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register("admittedCollegeName")} value={collegeName} type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="College Name" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3">
                            <label for="" class="text-xs font-semibold px-1">Address</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register("address")} type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Address" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3">
                            <label for="" class="text-xs font-semibold px-1">Phone Number</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register("studentPhoneNumber")} type="number" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3">
                            <label for="" class="text-xs font-semibold px-1">Date of birth</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input {...register("dateOfBirth")} type="date" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Date of birth" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Admission</button>
                            <Toaster />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;