import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Services.css'

const ServiceCard = ({ food }) => {
    const { name, img, details } = food;
    return (
        <div>

            <div className="card1 w-96 bg-base-100  shadow-xl">
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
                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ServiceCard;