import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products] = useProducts();
    console.log(products.length);
    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-24 py-24'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;