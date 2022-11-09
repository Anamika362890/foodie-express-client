import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/AuthProvider';
import Review from './Review';

const ReviewPart = () => {
    const { user } = useContext(AuthContext);

    const { _id, name,
        price, reviews, rating, details } = useLoaderData();

    const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const comment = form.comment.value;

        const foodDetails = {
            service: _id,
            ServiceName: name,
            ServicePrice: price,
            ServiceRatings: rating,
            ServiceDetails: details,
            userName,
            email,
            photoURL,
            comment

        }
        fetch('http://localhost:5000/foodDetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodDetails)

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

            <h1 className='text-3xl font-extrabold my-7 pb-3'>Review About This Service</h1>

            {
                reviews.map(review => <Review
                    key={review.review_id}
                    review={review}
                ></Review>)
            }

            {
                user?.email ?
                    <>
                        <form onSubmit={handleAddComment}>
                            <div className="form-control w-full mx-5">
                                <label className="label">
                                    <span className="label-text">Your Review</span>

                                </label>

                                <textarea name='comment' className="textarea textarea-bordered h-24" placeholder="Write Here" required ></textarea>
                                <button className='btn my-4'>Add A Comment</button>


                            </div>

                        </form>
                    </>
                    :
                    <>

                        <div>
                            <h1 className='text-2xl font-semibold'> Please <Link to='/login'><button className='btn'>Login</button></Link> First to add your comment</h1>
                        </div>
                    </>
            }










        </div >
    );
};

export default ReviewPart;