import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Loading from '../../Shared/Loading';
import PageTitle from '../../Shared/PageTitle';
import ProductRow from '../forAdmin/ProductRow';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    if(!products.length){
        <Loading></Loading>
    }
    return (
        <div className=''>
            <PageTitle title="Manage Products"></PageTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>in-Stock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                            key={product._id}
                            index={index}
                            product={product}
                            products={products}
                            setProducts={setProducts}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;

