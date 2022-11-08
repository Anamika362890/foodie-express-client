import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewPart from './ReviewPart';
import ServiceById from './ServiceById';

const ServiceDetails = () => {

    return (
        <div className='grid grid-cols-2 gap-4 mx-24 text-center'>

            <ServiceById></ServiceById>
            <ReviewPart></ReviewPart>
        </div>
    );
};

export default ServiceDetails;