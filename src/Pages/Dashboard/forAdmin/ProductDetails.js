import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
const ProductDetails = () => {
    const productId= useParams()
    const [product] = useProductDetail(productId.productId)
    const { _id, img, description, availableQuantity, minimumOrderQuantity, name, pName, price } = product;
    return (
        <section>
            <button onClick={()=> window.history.back()} className="btn ml-auto lg:mr-4 block btn-sm">back</button>
            <div className='hero lg:m-4 flex lg:flex-row flex-col shadow-lg'>
            <div>
                <img className={`h-[400px]`} src={product?.img} alt="" />
            </div>
            <div className='m-8 w-8/12'>
                <h1 className='text-3xl font-bold my-4'>{name}</h1>
                <h3 className='my-2'>{description}</h3>
                <h3 className='uppercase font-bold text-gray-500 mr-4'>In stock: <span className='text-accent'>{availableQuantity}</span></h3>
                <h3 className='uppercase font-bold text-gray-500 mr-4'>Min-Order: <span className='text-accent'>{minimumOrderQuantity}</span> </h3>
                <h3 className='uppercase font-bold text-gray-500 mr-4'>Price: <span className='text-accent'> {price}</span></h3>
                
            </div>
        </div>
        </section>
    );
};

export default ProductDetails;