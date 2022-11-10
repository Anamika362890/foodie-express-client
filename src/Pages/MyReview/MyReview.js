import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/hooks';
import { AuthContext } from '../Context/AuthProvider';
import ReviewTable from './ReviewTable';


const MyReview = () => {
    useTitle('My Reviews')
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    useEffect(() => {

        fetch(`http://localhost:5000/foodDetails?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logout])


    return (


        <div>


            {
                reviews.length === 0 ?
                    <>
                        <h1 className='text-5xl my-36 mx-96 px-28  '>No reviews were added</h1>
                    </>
                    :
                    <>
                        <h2 className='text-gray-500 text-3xl text-center'>You have {reviews.length} Review</h2>
                        <div className="pt-10 overflow-x-auto px mx-10">
                            <table className="table w-48 lg:w-full ">

                                <thead>
                                    <tr>

                                        <th>Service Name</th>
                                        <th>Your Review</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        reviews.map(review => <ReviewTable
                                            key={review._id}
                                            review={review}
                                        ></ReviewTable>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </>
            }




        </div>
    );
};

export default MyReview;