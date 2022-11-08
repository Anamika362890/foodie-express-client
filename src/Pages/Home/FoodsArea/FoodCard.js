import React from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import './Foods.css'

const FoodCard = ({ food }) => {
    const { name, img, details, rating } = food;

    return (
        <div>

            <div className="card w-96 bg-base-100  shadow-xl">
                <figure className="px-10 pt-10 p">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>

                        <FaStarHalfAlt></FaStarHalfAlt>
                    </div>
                    <p>Ratings : {rating}</p>
                    <p>{details.slice(0, 100)}...</p>
                    <div className="card-actions my-3">
                        <button className="btn ">See Details</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default FoodCard;