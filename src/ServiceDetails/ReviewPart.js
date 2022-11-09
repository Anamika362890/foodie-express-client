import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/AuthProvider';
import Review from './Review';

const ReviewPart = () => {
    const { user } = useContext(AuthContext);

    const { reviews } = useLoaderData();
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
                        <div>
                            <div className="form-control w-full mx-5">
                                <label className="label">
                                    <span className="label-text">Your Review</span>

                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                            </div>
                            <button className='btn my-4'>Add A Comment</button>
                        </div>
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