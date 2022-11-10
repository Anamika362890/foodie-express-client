import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Review from './Review';

const ServiceById = () => {
    const { img, name, rating, details, } = useLoaderData();




    return (
        <div>

            <div className='border rounded-2xl w-96 m-10 h-full shadow-2xl'>
                <div className='service'>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className="rounded-3xl" src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div>
                    <div className="items-center text-center">
                        <h2 className="text-2xl font-semibold text-gray-600 ">{name}</h2>
                        <div className='flex mx-32  text-yellow-400 my-2 '>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>

                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>
                        <p className='text-xl'>Ratings : {rating}</p>
                        <p className='text-center mx-4'>{details}</p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceById;