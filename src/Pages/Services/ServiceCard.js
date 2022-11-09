import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ food }) => {
    const { _id, name, img, details, rating } = food;
    return (
        <div>
            <div className='border rounded-2xl'>
                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" className="rounded-xl" />
                        </PhotoView>
                    </PhotoProvider>


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
                    <p>{details.slice(0, 100)}...</p>
                </div>
                <Link to={`/details/${_id}`} >   <button className='btn'>View Details</button></Link>


            </div>



        </div >
    );
};

export default ServiceCard;