import React from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Foods.css'
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const { _id, name, img, details, rating } = food;

    return (
        <div>
            <div className='border rounded-2xl w-80 h-full shadow-2xl '>
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
                        <p className='text-center mx-4'>{details.slice(0, 100)}...</p>
                        <div className=" my-3">
                            <Link to={`/details/${_id}`} >   <button className='btn'>View Details</button></Link>
                        </div>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default FoodCard;