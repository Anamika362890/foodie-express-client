import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/hooks';
import { AuthContext } from './../../Context/AuthProvider';

const Login = () => {
    useTitle('Log in')
    const { logIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();



    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                //jwt
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                //get jwt token
                fetch('https://foodies-express-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })



            })
            .catch(error => console.error(error))

    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;

                form.reset();
                setError('');
                //jwt
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                //get jwt token
                fetch('https://foodies-express-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })





            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }
            )
    }

    return (
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
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" >
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <p className='text-red-500'>{error.slice(9, 200)}</p>
                                <button className='btn'>Login</button>
                                <div className="   text-center">

                                    Or,Sign in with

                                </div>
                                <div className='text-5xl mx-40 pl-2 text-red-500'>
                                    <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>
                                </div>

                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light ">
                                    Don’t have an account yet? <Link to='/signup'><span className='text-yellow-500'>Sign Up</span></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;