import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-bold'>{name}</td>
            <td>{description}</td>
            <td className='font-bold'>{availableQuantity}</td>
            <td>{user.role !== 'admin' && <button className='border-0' onClick={() => handleDelete(product._id)}><FontAwesomeIcon className='text-red-500' icon={faTrashCan} /></button>}</td>
        </tr>
    );
};

export default ProductRow;