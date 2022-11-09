import React, { useEffect, useState } from 'react';
import { FaFonticonsFi } from 'react-icons/fa';
import useTitle from '../../Hooks/hooks';
import FoodCard from '../Home/FoodsArea/FoodCard';
import ServiceCard from './ServiceCard';


const Services = () => {
    useTitle('Services')
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='   text-center py-5'>
            <h1 className='text-5xl font-semibold text-gray-500'>Here is Our Full Menu</h1>
            <div className='serviceCard mx-52 my-14'>
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