import React, { useEffect, useState } from 'react';
import { FaFonticonsFi } from 'react-icons/fa';
import FoodCard from '../Home/FoodsArea/FoodCard';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className=' text-5xl px text-center py-5'>
            <h1>Here is Our Full Menu</h1>
            <div className='serviceCard mx-52'>
                {
                    foods.map(food => <ServiceCard
                        key={food._id}
                        food={food}
                    ></ServiceCard>)
                }
            </div>



        </div>
    );
};

export default Services;