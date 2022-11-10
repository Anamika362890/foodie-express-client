import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className='my-32 shadow-2xl pb-10  text-center'>
            <h1 className='text-5xl  mb-5 text-yellow-500 '>About This Service</h1>

            <p className='my-10'>This is a personal food delivery page.This Food Express has one owner.She made food in home & deliver the food</p>

            <span className='text-gray-500'>Want To Join????</span>
            <Link to='/' >  <button className='btn' >Get Started</button></Link>


        </div>
    );
};

export default About;