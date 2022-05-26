import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Product = ({ product }) => {
    if (!product.length) {
        <Loading></Loading>
    }
    console.log(product);
    const {_id, name, description, minimumOrderQuantity, availableQuantity, price, img } = product;

    return (
        <div class="lg:max-w-lg py-5">
            <figure class="">
                <img src={img} alt={name} class=" w-60 h-60 rounded-xl" />
            </figure>
            <div class=" text-left">
                <h2 class="text-2xl">{name}</h2>
                <p><small>{description}</small></p>
                <p><small>Minimum Order Quantity:</small> {minimumOrderQuantity}</p>
                <p><small>Available Quantity:</small> {availableQuantity}</p>
                <p>Price: ${price}</p>
                <Link to={`/purchase/${_id}`} className='d-block'>
                    <button className='w-50 font-bold py-1'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;