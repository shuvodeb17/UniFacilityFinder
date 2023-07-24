import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";



const Review = () => {
    const reviewsDetails = useLoaderData()
    const { admittedCollegeName, studentName, studentEmail, photo, collegeImage, events, facilities, sports, numberOfResearch, ratings, history } = reviewsDetails;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <section className='bg-[#151920] text-white h-[88vh]'>
            <div className='container mx-auto'>
                <div className='bg-[#0E1317] p-11 rounded grid grid-cols-2 gap-11'>
                    <img src={collegeImage} alt="" />

                    <div>
                        <h2 className="text-xl font-bold mb-3">{admittedCollegeName}</h2>
                        <p>Name: {studentName}</p>
                        <p>Email: {studentEmail}</p>
                        <p>Events: {events}</p>
                        <p>History: {history}</p>
                        <p>Facilities: {facilities}</p>
                        <p>Sports: {sports}</p>
                        <p>Number Of Research: {numberOfResearch}</p>

                        <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                            <p>Review</p>
                            <input {...register("reviews")} type="text" className="p-3 rounded text-black outline-none w-full" />
                            <button className="mt-5 bg-green-500 px-5 py-2 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;