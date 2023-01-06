import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        alert("Submit Successfully");
        form.reset();







    }

    return (
        <div>
            <div>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-12 h-10 rounded-xl mr-2" src="https://cdn.dribbble.com/users/77598/screenshots/15211765/media/fcc955283307a8ead2d4e4a8daf0d852.png?compress=1&resize=400x300&vertical=top" alt="logo" />
                            <h1 className='font-bold text-2xl text-gray'><span className='text-yellow-400 '>Foodies</span> Express</h1>
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Contact Us
                                </h1>
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" >
                                    <div>
                                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                                    </div>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required="" />
                                    </div>
                                    <div>
                                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                                        <input type="text" name="password" id="password" placeholder="Write Something" className="py-7 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>

                                    <button className='btn'>Submit</button>




                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Contact;