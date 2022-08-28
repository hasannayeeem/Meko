import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ProductRow = ({index,product, products, setProducts}) => {
    const [user] = useAuthState(auth);
    const {name, availableQuantity, description} = product;
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if(proceed){
            const url = `https://ancient-bayou-13762.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id  !== id);
                setProducts(remaining);
            })
        }
    }
    const handleUpdate = id => {
        const proceed = window.confirm('are you sure?');
        if(proceed){
            const url = `https://ancient-bayou-13762.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id  !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-bold'>{name}</td>
            <td>{description.slice(0, 65)}...</td>
            <td className='font-bold'>{availableQuantity}</td>
            <td>
                <div className='flex'>
                {user.role !== 'admin' && <button className='border-0 mr-2' onClick={() => handleDelete(product._id)}><FontAwesomeIcon className='text-red-500' icon={faTrashCan} /></button>}
                {user.role !== 'admin' && <button disabled className='border-0 btn btn-xs btn-primary text-xs' onClick={() => handleUpdate(product._id)}>edit</button>}
                </div>
                <Link to={`${product?._id}`}><button className='btn btn-xs mt-1'>details</button></Link>
            </td>
        </tr>
    );
};

export default ProductRow;