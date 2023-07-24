import React from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';




const Review = () => {
    const reviewsDetails = useLoaderData()
    const { _id, admittedCollegeName, studentName, studentEmail, photo, collegeImage, events, facilities, sports, numberOfResearch, ratings, history } = reviewsDetails;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const updateReview = { admittedCollegeName, photo, ratings, studentName, studentEmail, reviews: data.reviews }
        console.log(updateReview)

        fetch(`https://server-side-steel-theta.vercel.app/reviews-data`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    toast.success('Reviews added successfully')
                }
            })
    }

    return (
        <section className='bg-[#151920] text-white h-[88vh]'>
            <div className='container mx-auto'>
                <div className='bg-[#0E1317] p-11 rounded grid md:grid-cols-2 grid-cols-1 px-5 md:px-0 gap-11'>
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
                            <input {...register("reviews")} type="text" className="p-3 rounded text-black outline-none w-full" required />
                            <button className="mt-5 bg-green-500 px-5 py-2 rounded">Send</button>
                            <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;