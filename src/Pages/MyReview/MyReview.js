import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/foodDetails?email=${user?.email}`)

            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])


    return (
        <div>
            <h2>You have {reviews.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;