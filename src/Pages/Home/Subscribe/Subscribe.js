import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="  leading-tight text-4xl text-yellow-500  sm:text-4xl lg:text-5xl">Enter Your Email</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Subscribe our site for stay updated.</p>
                    </div>

                    <form action="#" method="POST" class="max-w-xl mx-auto mt-12">
                        <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                            <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                                <label for="email" class="sr-only"></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email to get started"
                                    class="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    required
                                />
                            </div>


                        </div>
                    </form>

                    <div class="flex items-center justify-center px-8 mt-8 sm:px-0">
                        <button type="submit" class=" btn   ">
                            Submit
                            <svg class="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>






                    </div>
                </div>
            </section >

        </div >
    );
};

export default Subscribe;