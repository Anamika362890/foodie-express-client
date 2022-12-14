import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/hooks';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    useTitle('Register')
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);





    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name, photoURL);
                console.log(user);

                setError('');
                form.reset();
                navigate('/')





            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }

            )


    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <section className="my-12 bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-12 h-10 rounded-xl mr-2" src="https://cdn.dribbble.com/users/77598/screenshots/15211765/media/fcc955283307a8ead2d4e4a8daf0d852.png?compress=1&resize=400x300&vertical=top" alt="logo" />
                        <h1 className='font-bold text-2xl text-gray'><span className='text-yellow-400 '>Foodies</span> Express</h1>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6">
                                <div className="form-control">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-bold">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="photoURL" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <p className='text-red-500'>{error.slice(9, 200)}</p>
                                <div className="form-control mt-6">
                                    <input className="btn " type="submit" value="Sign Up" />
                                </div>
                                <h3>Already Register? <Link className='text-yellow-500' to='/login'>Login</Link></h3>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;