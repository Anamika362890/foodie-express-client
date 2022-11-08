import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceById = () => {
    const { img, name, rating, details } = useLoaderData();
    return (
        <div>

            <div className='border rounded-2xl'>
                <div>
                    <img src={img} alt="" className="rounded-xl" />
                </div>
                <div className='items-center text-center'>
                    <p className='text-2xl font-medium'>{name}</p>
                    <div className='flex'>
                        <div>
                            <p>{rating}</p>
                        </div>
                        <div className='flex  text-yellow-400'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>

                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>

                    </div>
                    <p>{details}</p>
                </div>



            </div>

        </div>
    );
};

export default ServiceById;