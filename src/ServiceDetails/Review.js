import React from 'react';
import './ServiceDetails.css'

const Review = ({ review }) => {
    const { reviewer_name, r_img, details } = review;
    return (
        <div>
            <div className='flex border w-full m-5 p-5 rounded-md'>
                <div className='avatar w' >
                    <img src={r_img} alt='' />

                </div>
                <div className='text-justify mx-3 my-2'>

                    <h1 className='text-xl w- font-bold'>{reviewer_name}</h1>


                    <p>{details}</p>

                </div>


            </div>

        </div >
    );
};

export default Review;