import React from 'react';
import { FaSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../../assests/1.webp'

import img2 from '../../../assests/2.jpg'
import './Banner.css';


const Banner = () => {
    return (

        <div className='bnr py-10'>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="your-background">
                    <img src={img1} alt='' />
                </div>
                <div className="mt-9 absolute mt-6 justify-between transform -translate-y-1/2 left-9 right-5  top-60">

                    <h1 className='text-yellow-500 top font-bold text-6xl '>We are always ready <br></br> to supply food for<br /> you anytime


                    </h1>

                    <div className='flex'>
                        <h1 className='text-gray-200 text-lg mt-9'>Have Any Questions?<Link to="/contact"><span className='ml-1 text-warning font-bold'>Contact Us</span></Link></h1>


                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;