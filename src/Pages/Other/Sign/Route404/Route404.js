import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../../../assests/undraw_page_not_found_re_e9o6.svg';

const Route404 = () => {
    return (
        <div className=' lg:ml-56 lg:mt-10 sm:mt-48 mt-32 '>
            <img className='lg:ml-32 ' src={image} alt="" />
            <div className='lg:mr-44  text-center'>
                <h1 className='lg:text-4xl my-5 md:text-7xl'>Page Not Found</h1>
                <Link to='/'>
                    <button className='btn '> Go Back To Home
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Route404;