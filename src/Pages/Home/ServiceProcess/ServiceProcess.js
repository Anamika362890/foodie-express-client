import React from 'react';
import picture from '../../../assests/4.webp'
import picture2 from '../../../assests/3.jpg'
import './ServiceProcess.css'

const ServiceProcess = () => {
    return (
        <div>

            <div className='grid lg:grid-cols-2 border gap-11 p-10 m-10 rounded-lg shadow-xl '>
                <div className='border'>
                    <img src={picture} alt='' />
                    <img src={picture2} alt='' />
                </div>
                <div className='mt-7' >
                    <h1 className='text-4xl text-yellow-500'>Why Choose Us!!</h1>
                    <div className='lg:grid grid-cols-2 gap-5 my-7 '>
                        <div className='border p-2 rounded-lg '>
                            <p className='text-2xl font-bold '>Best Quality </p>
                            <p>You will get Fresh and best quality foods here.Foods test. </p>

                        </div>
                        <div className='border p-2 rounded-lg'>
                            <p className='text-2xl font-bold '> Best Test</p>
                            <p>The taste of the food is incomparable. </p>
                        </div>

                        <div className='border p-2 rounded-lg'>
                            <p className='text-2xl font-bold '>Home Made Food </p>
                            <p>All of the foods are homemade.you will feel taste like your home</p>
                        </div>
                        <div className='border p-2 rounded-lg'>
                            <p className='text-2xl font-bold '>Hygienic</p>
                            <p>All the foods are prepare with cleanliness and the food is hygienic</p>
                        </div>

                        <div className='border p-2 rounded-lg'>
                            <p className='text-2xl font-bold '>Fastest Delivery </p>
                            <p>Food is delivered within 1 hour or less time.</p>
                        </div>
                        <div className='border p-2 rounded-lg'>
                            <p className='text-2xl font-bold '>24/7 Services</p>
                            <p>You can order food whatever you want.This Service is always ready for you.</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ServiceProcess;