import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewPart from './ReviewPart';
import ServiceById from './ServiceById';

const ServiceDetails = () => {

    return (
        <div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mx-24 text-center'>

                <ServiceById></ServiceById>
                <ReviewPart></ReviewPart>
            </div>

        </div>
    );
};

export default ServiceDetails;