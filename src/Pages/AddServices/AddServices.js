import React from 'react';

const AddServices = () => {
    const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photoURL.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const price = form.price.value;

        const foods = {

            name, img, details, rating, price


        }
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foods)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            }

            )
            .catch(er => console.error(er));



    }



    return (
        <div>
            <div>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            Flowbite
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                    Add Your Service
                                </h1>
                                <form onSubmit={handleAddComment}>
                                    <div className="form-control w-full mx-5">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>

                                        </label>


                                        <input name='name' type="text" placeholder="Service Name" className="input input-bordered  w-full max-w-xs" />

                                        <label className="label">
                                            <span className="label-text">Service PhotoURL</span>

                                        </label>


                                        <input name='photoURL' type="photoURL" placeholder="Service PhotoURL" className="input input-bordered w-full max-w-xs" />

                                        <label className="label">
                                            <span className="label-text">Service Details</span>

                                        </label>


                                        <input name='details' type="text" placeholder="details" className="input input-bordered  w-full max-w-xs" />

                                        <label className="label">
                                            <span className="label-text">Service Price</span>

                                        </label>


                                        <input name='price' type="number" placeholder="Service Price" className="input input-bordered  w-full max-w-xs" />


                                        <label className="label">
                                            <span className="label-text">Your Rating</span>

                                        </label>


                                        <input name='rating' type="text" placeholder="Your Rating" className="input input-bordered input-primary w-full max-w-xs" />
                                        <button className='btn my-4'>Add </button>


                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

        </div >
    );
};

export default AddServices;