import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className='my-10 text-center'>
            <h1 className='text-5xl '>About This Service</h1>

            <p>This is a personal food delivery page.This Food Express has one owner.She made food in home & deliver the food</p>

            Want To Join????
            <Link to='/login' >  <button className='btn' >Login</button></Link>


        </div>
    );
};

export default About;