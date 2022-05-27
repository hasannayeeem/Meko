import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import sectionHeader from '../../assets/images/section-header.png'

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <div className='text-center w-100'>
                <img className='mx-auto pt-20 pb-2' src={sectionHeader} alt="" />
                <h2 className='py-4 text-4xl text-accent font-bold'>Trending Products</h2>
                <p className='px-6'>Best quality personnel care products to control germs and maintain cleanliness</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-24 pt-8 pb-24'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;