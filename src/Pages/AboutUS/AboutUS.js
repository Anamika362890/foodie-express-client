import React from 'react';
import { Link } from 'react-router-dom';

const AboutUS = () => {
    return (
        <div className='lg:w-[1290px] mx-auto'>

            <div className="  2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl text-yellow-500 leading-9  pb-4">About Foodies Express</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a food review related website.You can see all foods from here & give review of all food.You can get here all home made food.order to deliver full process is managed by a single person.</p>
                        <Link to="/contact"><button className='btn w-sm mt-4'>Contact Us</button></Link>

                    </div>

                    <div className="w-full lg:w-8/12">
                        <img className="w-full h-full" src="https://media.istockphoto.com/id/959584318/photo/making-dinner-into-a-masterpiece.jpg?s=612x612&w=0&k=20&c=5sadZdufW-4j_ZmV3XM8KSZXRFcYRD-Nmh0vqTkIS7Y=" alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl fleading-9 text-yellow-500 dark:text-white pb-4">Our Process</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">We take order from customer.Make the food and ready it deliver from customer.After that we deliver that to our customers</p>

                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden h-24 w-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8R24ZxKBp__EhmAHqj6hDL5GIMNX1BQ0DEw9M38OhgAcUQM4AXQJrCQCwGaCoNUkz5wM&usqp=CAU" alt="" />
                                <img className="md:hidden block h-24 w-44" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8R24ZxKBp__EhmAHqj6hDL5GIMNX1BQ0DEw9M38OhgAcUQM4AXQJrCQCwGaCoNUkz5wM&usqp=CAU" />
                                <p className="font-medium text-lg leading-5 text-yellow-500  mt-4"> Order From Customers</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden h-24 w-44" src="https://i.ndtvimg.com/i/2016-12/cooking-620_620x350_61481792320.jpg?im=FeatureCrop,algorithm=dnn,width=345,height=250" alt="" />
                                <img className="md:hidden block h-24 w-44" src="https://i.ndtvimg.com/i/2016-12/cooking-620_620x350_61481792320.jpg?im=FeatureCrop,algorithm=dnn,width=345,height=250" />
                                <p className="font-medium text-lg leading-5 text-yellow-500  mt-4">Prepare The Food</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden h-24 w-44" src="https://assets.website-files.com/609ef1c090274284e823386f/62505d0009220bf11d05c19b_9%20ways%20to%20get%20your%20restaurant%20ready%20for%20delivery%20during%20Ramadan%202.jpg" alt="" />
                                <img className="md:hidden block h-24 w-44" src="https://assets.website-files.com/609ef1c090274284e823386f/62505d0009220bf11d05c19b_9%20ways%20to%20get%20your%20restaurant%20ready%20for%20delivery%20during%20Ramadan%202.jpg" alt="" />
                                <p className="font-medium text-lg leading-5 text-yellow-500  mt-4">Make Ready For Deliver </p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden h-24 w-44" src="https://static.toiimg.com/photo/msid-81923053/81923053.jpg" alt="" />
                                <img className="md:hidden block h-24 w-44" src="https://static.toiimg.com/photo/msid-81923053/81923053.jpg" alt="" />
                                <p className="font-medium text-lg leading-5 text-yellow-500  mt-4">Deliver The Food</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUS;