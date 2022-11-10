import React, { useState } from 'react';

const ReviewTable = ({ review }) => {
    const { _id, ServiceName, comment, } = review;
    const [showModal, setShowModal] = useState(false);




    const handleCommentSubmit = event => {
        event.preventDefault();
        // console.log(user);
        fetch(`https://foodies-express-server.vercel.app/foodDetails${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    console.log(data);
                }

            })
    }
    return (


        <tr>

            <td>{ServiceName}</td>
            <td>{comment}</td>
            <td><button onClick={() => setShowModal(true)} className='btn'>Edit</button></td>
            <td><button className='btn'>Delete</button></td>
            {showModal ?

                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit Your Review
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleCommentSubmit}>
                                        <input name='comment' type="text" placeholder="Your Review" defaultValue={comment} className="input input-bordered w-full max-w-xs" />
                                    </form>
                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                :
                null
            }


        </tr>


    );
};

export default ReviewTable;