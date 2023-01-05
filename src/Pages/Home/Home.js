import React from 'react';
import useTitle from '../../Hooks/hooks';
import About from './About/About';
import Banner from './Banner/Banner';
import Foods from './FoodsArea/Foods';
import ServiceProcess from './ServiceProcess/ServiceProcess';
import Subscribe from './Subscribe/Subscribe';
import TopCustomerSay from './TopCustomerSay/TopCustomerSay';



const Home = () => {
    useTitle('Home')
    return (
        <div className=' lg:mx-52 '>

            <Banner></Banner>
            <Foods></Foods>
            <ServiceProcess></ServiceProcess>

            <About></About>
            <Subscribe></Subscribe>
            <TopCustomerSay></TopCustomerSay>



        </div>
    );
};

export default Home;