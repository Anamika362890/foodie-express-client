import React from 'react';
import { FaSign } from 'react-icons/fa';
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
                <div className="absolute flex justify-between transform -translate-y-1/2 left-9 right-5  top-60">

                    <h1 className='text-lime-400 top font-bold text-6xl '>We are always ready <br></br> to supply food for<br /> you anytime

                    </h1>
                </div>
                <div className=" absolute flex justify-between transform -translate-y-1/2 left-9 right-5 top-96 ">
                    <button className='btn'>Log in now</button>

                </div>
            </div>
        </div >
    );
};

export default Banner;