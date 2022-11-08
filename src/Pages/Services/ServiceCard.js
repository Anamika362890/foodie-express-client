import React from 'react';
import './Services.css'

const ServiceCard = ({ food }) => {
    const { name, img } = food;
    return (
        <div>

            <div className="card1 w-96 bg-base-100  shadow-xl">
                <figure className="px-10 pt-10 p">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ServiceCard;