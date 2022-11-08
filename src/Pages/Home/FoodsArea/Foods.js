import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>

            <h1 className='text-5xl px text-center py-5'>Here is Our 3 Demanding Foods</h1>

            <div className='foods-area py-10  md:px-16 sm:ps-6'>
                {
                    foods.map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }

            </div>
            <div className='text-center my-11'>
                <Link ><button className='btn'>Click Here To See All Services</button></Link>
            </div>
        </div>
    );
};

export default Foods;