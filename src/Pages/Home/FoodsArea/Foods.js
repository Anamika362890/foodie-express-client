import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://foodies-express-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>

            <h1 className='text-5xl text-center py-7 text-gray-400'>Here is Our 3 Demanding Foods</h1>

            <div className='foods-area lg:py-10  md:px-16 sm:ps-6'>
                {
                    foods.map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }

            </div>
            <div className='text-center my-11'>
                <Link to='/services' ><button className='btn'>
                    <p className='mx-1'> Click Here To See All Services</p>
                    <FaArrowRight></FaArrowRight>

                </button></Link>
            </div>
        </div>
    );
};

export default Foods;