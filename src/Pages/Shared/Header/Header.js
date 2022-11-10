import React, { useContext, useState } from 'react';
import { FaBars, FaBook, FaCross, FaUser, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from './../../Context/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then()
            .catch();
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.uid ?
                <>

                    <li className='font-semibold'><Link to='/add-services'>Add Services</Link></li>

                    <li className='font-semibold'><Link to='/my-reviews'>My Review</Link></li>



                    <button onClick={handleLogout} className='btn btn-outline btn-warning ml-24 mt-3 '>Logout</button>
                    <NavLink className='text-decoration-none  text-white m-3' data-toggle="tooltip" title={user?.displayName}>
                        {
                            user?.photoURL ?
                                <img className='w-12 rounded-full border' src={user?.photoURL} alt='' />
                                :
                                <img className='w-12 rounded-full border' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png' alt='' />
                        }
                    </NavLink>








                </>
                :
                <>
                    <li className='font-semibold'><Link to='/services'>Services</Link></li>
                    <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
                    <div className=" lg:mx-48 ">
                        <Link to='/signup'><button className="btn btn-outline btn-warning mr-6">Sign Up</button></Link>
                        <Link to='/login'><button className="btn btn-outline btn-warning">Sign In</button></Link>
                    </div>




                </>


        }


    </>
    return (
        <div>
            <div className="navbar  bg-white-400 lg:h-20 lg:mb-12 lg:py-12 shadow-2xl text-gray-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost lg:ml-32 normal-case lg:text-xl">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-BOtb65I48zBFG6lhpVtz-tNfnSh__c9txbTHwEFiIV8KLYVHYeL-BB1PBxnDk0zGZU&usqp=CAU' className=' w-10 ' alt="" />
                        <h1 className='font-bold text-3xl ml-3 mt-2'><span className='text-yellow-500  '>Foodies</span> Express</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {menuItems}

                    </ul>
                </div>

            </div>
        </div>
    );
};


export default Header;